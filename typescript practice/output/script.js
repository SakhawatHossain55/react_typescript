"use strict";
// ** What is TypeScript?
// Supperset of JavaScript created by Microsoft
// Extra features - interfaces, enums, temples, generics
// supperts moder features (arrow functions, let, const)
// Based on the .NET harmony specification 
// let playerMane;
// playerMane = "Mashrafi"
// playerMane = 15;
// console.log(playerMane);
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3,4));
// array
// let mixed = ['apple', 3, true, {}]
// mixed.push({
//     name: 'Shakib'
// })
// let person = {
//     name: 'Mashrafi',
//     age: 35,
//     isCaptain: true,
// }
// person.name = 'shakib'
// let b: string | number;
// // array
// let a: (string | number)[] = [];
// b = 'Sumit';
// a.push('sumit', 4, false);
// // object
// let c: {
//     name: string;
//     age: number;
//     adula: boolean
// }
// // error
// c = {
//     name: 'sumit',
// }
// // Right 
// c = {
//     name: 'sumit',
//     age: 25,
//     adula: false
// }
// // error
// c = []
// let a: any;
// a = 50
// a = 'Math'
// Array
// let a: any[] = [];
// a.push('Bangladesh')
// a.push(552)
// //object
// let b: {
//     name: any;
//     age: any;
// }
// b = {
//     name: 'Bangladesh',
//     age: 456
// }
// const myFunc = (a: string, b: string) => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc('a', 'b');
// // opshonal system
// const myFunc2 = (a: string, b: string, c?:string) => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc2('a', 'b');
// // defolt valu
// const myFunc3 = (a: string, b: string, c: string = 'hello') => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc3('a', 'b');
// // Type Aliases
// type stringOrNum = string | number;
// type userType = {name: string; age: number};
// const userDetails = (id: stringOrNum, user: userType) => {
//     console.log(`user id is ${id}, naem is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir": "Nr."} ${user.name}`);
// }
// let add: (x: number, y: number) => number;
// add = (a: number, b: number) => {
//     return(a+b);
// }
// console.log(add(5, 6));
// let calculaton: (x: number, y: number, z: string) => number;
// calculaton = (a: number, b: number, c: string) => {
//     if(c === 'add') {
//         return a + b
//     } else {
// return a-b
//     }
// }
// console.log(calculaton(5, 6, 'minus'));
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.current = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.current + " is playing");
    };
    return Player;
}());
var mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
var shakib = new Player('Shakib', 35, 'Bangladesh');
var players = [];
players.push(shakib);
players.push(mashrafi);
