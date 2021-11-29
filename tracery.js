// tracery.js

const tracery = require('tracery-grammar');
 
function Tracery(data = {}) {
	if (!data || Object.keys(data).length == 0) throw new Error("please input a dictionary object!")

	let grammar = tracery.createGrammar(data)
	grammar.addModifiers(tracery.baseEngModifiers); 

	// GET //
	this.main = function(origin) {
		if (!origin) return undefined
		if (typeof origin !== "string") throw new Error("input must be a string!")
		if (!data.hasOwnProperty(origin)) return undefined
			
		let output = grammar.flatten(`#${origin}#`)
		return output
	}

	this.main.data = data
	return this.main

}


module.exports = Tracery