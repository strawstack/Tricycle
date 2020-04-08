class Tricycle {
    constructor(config) {
        this.root = config.root;
        this.data = config.data;

        let classMap = {};
        let contentMap = {};

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

        // init properties
        for (let prop in this.data) {
            let value = this.data[prop];
            updateHTML(prop, value);
        }

        const handler = {
            set(obj, prop, value) {
                //console.log("obj:", obj, ", prop:", prop, ", value:", value);
                updateHTML(prop, value);
                obj[prop] = value;
            }
        };

        return new Proxy(this.data, handler);
    }
}
