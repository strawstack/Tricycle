function main() {
    let app = new Tricycle({
        root: "#app",
        data: {
            titleClass: "title-area",
            textClass: "text-area",
            listClass: "",
            title: "Example Title",
            textContent: "Realtime Tricycle binding",
            item1: "muffin mix",
            item2: "chocolait chips",
            item3: "orange juice",
            item1Class: "",
            item2Class: "",
            item3Class: ""
        }
    });

    // Randomly edit JS object to demonstrate realtime binding
    setInterval(() => {
        let rand = (value) => Math.floor(Math.random() * value);
        let classList = [
            "grey-background", "all-caps", "flip", "font-one",
            "font-two", "tiny", "large", "medium"
        ];
        let dataList = [
            "Muffin Mix", "Chocolait Chips", "Realtime Tricycle Binding",
            "Orange Juice", "Example Title", "Simple and Effective"
        ];

        // Properties
        let classProps = ["titleClass", "textClass", "item1Class", "item2Class", "item3Class"];
        let dataProps = ["title", "textContent", "item1", "item2", "item3"];

        // Choose random class and data properties
        let randClassProp = classProps[rand(classProps.length)];
        let randomClass = classList[rand(classList.length)];
        let randDataProp = dataProps[rand(dataProps.length)];
        let randomData = dataList[rand(dataList.length)];

        // Change bound JS properties
        app[randClassProp] = randomClass;
        app[randDataProp] = randomData;

    }, 1000);
}
window.onload = main;
