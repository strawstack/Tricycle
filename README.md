# Tricycle

Three wheels and a set of handle bars is all you need to learn to ride a bike. Tricycle is a template library that performs one-way data binding to a Javascript object

# Live Demo

[View Live Demo](https://strawstack.github.io/Tricycle/)

# Basic Usage

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

# Computed Props

Computed props are `just like regular data` only their `value` must be a `function`. Computed props cannot be assigned too but, rather, they are computed automatically when regular props change. In the example, below, when `className` or `textContent` is updated, the computed prop will update as well!

Note, inside the function for a computed prop, the `this` keyword is a ref to the data object, so all properties of the `data` obj can be accessed via `this.property_name`

```html
<head>
    <script src="Tricycle.js"></script>
</head>
<body id="#app">
    <div class="{{ className }}">{{ textContent }}</div>
    <div>{{ computedProp }}</div>
    <script>

        let app = new Tricycle({
            root: "#app",
            data: {
                className: "text-area",
                textContent: "Tricycle is fast and simple",
                computedProp: function() {
                    return this.className + " " + this.textContent;
                }
            }
        });    

        // Edit data properties here, or in the console
        // Changes are reflected in realtime!
        app.className = "title-area";
        app.textContent = "Inspired by VueJS";

    </script>
</body>
```
