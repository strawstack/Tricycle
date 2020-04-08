# TriCycle

Three wheels and a set of handle bars is all you need to learn to ride a bike. Tricycle is a template library that performs one-way data binding to a Javascript object

# Live Demo

[View Live Demo](https://regularmemory.blog/Tricycle/)

# How to Use

With the code below, the `class` and `text content` of the div are bound to respective variables

```html
<head>
    <script src="Tricycle.js"></script>
</head>
<body id="#app">
    <div class="{{ className }}">{{ textContent }}</div>
    <script>

        let app = new Tricycle({
            root: "#app",
            data: {
                className: "text-area",
                textContent: "Tricycle is fast and simple"
            }
        });    

        // Edit data properties here, or in the console
        // Changes are reflected in realtime!
        app.className = "title-area";
        app.textContent = "Inspired by VueJS";

    </script>
</body>
```
