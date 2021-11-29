// test

const Tracery = require("./tracery.js")
const tracery = new Tracery({
	origin: ["#hello# #world# #emoji#"],
	hello: ["hello", "hey", "hi"],
	world: ["world", "earth", "planet earth"],
	emoji: ["🌎", "🌍", "🌏"]
})

// console.log(tracery.data)


tracery("origin")