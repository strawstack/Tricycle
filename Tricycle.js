class Tricycle {
    constructor(config) {
        this.root = config.root;
        this.data = config.data;

        // Map prop name to HTML element ref
        let classMap = {};
        let contentMap = {};

        // Map from computed prop to cached value
        let computedProps = {};
        for (let prop in this.data) {
            let value = this.data[prop];
            if (typeof value === 'function') {
                computedProps[prop] = value.call(this.data);
            }
        }

        // For each element, discover template values
        let html = document.querySelector(this.root);
        let elems = html.querySelectorAll("*");
        for (let elem of elems) {
            let className = elem.className;
            let textContent = elem.innerHTML;

            let reg1 = /^\s{0,}{{(.+)}}\s{0,}$/g;
            let reg2 = /^\s{0,}{{(.+)}}\s{0,}$/g;
            let classRes = reg1.exec(className);
            let contentRes = reg2.exec(textContent);

            if (classRes != null) {
                let classProperty = classRes[1].trim();
                if (!(classProperty in classMap)) classMap[classProperty] = [];
                classMap[classProperty].push(elem);
            }
            if (contentRes != null) {
                let contentProperty = contentRes[1].trim();
                if (!(contentProperty in contentMap)) contentMap[contentProperty] = [];
                contentMap[contentProperty].push(elem);
            }
        }

        // Place value at the bound HTML element
        let updateHTML = (prop, value) => {
            if (prop in classMap) {
                for (let elem of classMap[prop]) {
                    elem.className = value;
                }
            }
            if (prop in contentMap) {
                for (let elem of contentMap[prop]) {
                    elem.textContent = value;
                }
            }
        };

        // Recompute all computed props and update HTML accordingly
        let computePropsAndUpdate = () => {
            for (let prop in computedProps) {
                computedProps[prop] = this.data[prop].call(this.data);
                updateHTML(prop, computedProps[prop]);
            }
        };

        // init properties once
        for (let prop in this.data) {
            let value = this.data[prop];

            // Get cached value for computed props
            if (prop in computedProps) {
                value = computedProps[prop];
            }

            updateHTML(prop, value);
        }

        const handler = {
            set(obj, prop, value) {

                // Don't assign to computed props
                if (!(prop in computedProps)) {
                    obj[prop] = value;
                } else {
                    console.log("Cannot assign new value to computed prop");
                }

                // Calculate and update computed props
                computePropsAndUpdate();

                updateHTML(prop, value);
            }
        };

        return new Proxy(this.data, handler);
    }
}
