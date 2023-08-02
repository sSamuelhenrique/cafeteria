/* const { EventEmitter } = require('events');
const { inherits } = require('util');
console.log(inherits());

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter);

console.log(name) */

const { inherits } = require('util');
/* console.log(require('util')); */
const { EventEmitter} = require('events');
console.log(EventEmitter)
function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
console.log(chapolin)