const myObject = {color: "blue", age: 21, myfunction: function Person (name, lastName){
    this.name = name;
    this.lastName = lastName;

}}
const { myfunction } = myObject;
const person1 = new myfunction('Samuel', 'Henrique');
console.log(person1);
/* function Person (name, lastName){
    this.name = name;
    this.lastName = lastName;
}

const person1 = new Person("teste", "teste");
const person2 = new Person("testezola", "testezin")

console.log(person1)
console.log( person2) */


/* const {functionNvt} = person1
console.log(functionNvt)

const person2 = new Person("teste", "testezin", functionNvt);
console.log(person2) */
/* 
const { function} = person1;
console.log(name) */
/* console.log('events')
const { EventEmitter } = require('events');
console.log(EventEmitter); */

