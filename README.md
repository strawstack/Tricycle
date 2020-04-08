# TriCycle

Three wheels and a set of handle bars is all you need to learn to ride a bike. Tricycle is a template and a one-way binding

# Live Demo

[View Live Demo](#)

# How to Use

With the code below, the `class` and `text content` of the div are bound to respective variables

```
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

        // Edit the data properties inside app like so
        // and changes are reflected in realtime
        app.className = "title-area";
        app.textContent = "Inspired by VueJS";

    </script>
</body>
```
