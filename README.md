# tracery

This is a simplified implimentation of [tracery](https://www.npmjs.com/package/tracery-grammar) by [galaxykate](https://github.com/galaxykate).

*"Tracery is a super-simple tool and language to generate text."*

```javascript
const Tracery = require("@surfingpikachu/tracery")
const tracery = new Tracery({
	origin: ["#hello# #world# #emoji#"],
	hello: ["hello", "hey", "hi"],
	world: ["world", "earth", "planet earth"],
	emoji: ["🌎", "🌍", "🌏"]
})

tracery("hello")
// hey

tracery("origin")
// hello planet earth 🌎
````