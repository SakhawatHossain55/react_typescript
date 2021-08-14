"use strict";
// const country = 'I love Bangladesh'
// console.log(country);
// let playerName = "Mashrafi"
// console.log(playerName);
// let age = 34;
// console.log(age);
// // pothom jodi valu string dewa hoi tahole second taime o value staring dite hobe nahoi error
// // playerName = 34;
// let age = mashrafi;
// console.log(age);
// console.log(playerName);
// function multiply (a: number, b: number) {
//     return a * b;
// }
// console.log(multiply(5, 4));
// // type a jeta bole dawa hobe setai us korte hobe na hoi error dibe
// // console.log(multiply('sumin', 4));
// // Array
// let fruits = ['apply', 'bananna', 'orange']
// fruits.push('malta')
// let a: string;
// let b: number;
// a = "Sumit"
// b = 34;
// let a: string[] = [];
// a.push('sumit')
// // normal variable
// let b: string | number;
// let a: (string | number)[] = [];
// b = 'Sumit'
// a.push('sumit')
// // object
// let c: {
//     name: string,
//     age: number,
//     adult: boolean
// };
// c =  {
//     name: 'Sumit',
//     age: 34,
//     adult: true
// }
// // any type hobe amra je kono valu add korte pare
// let  a: any
// a = 5;
// a = 'Sumit'
// // Any type of array
// let  a: any[] = []
// a.push(5);
// a.push('Sumit')
// // Any type of object
// let b: {
//     name: any,
//     age: any,
// }
// b = {
//     name: 'Bangladesh',
//     age: 55
// }
// const myFunc = (a: string, b: string) => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc('A', 'B')
// const myFunc = (a: string, b: string, c?: string) => {
//     console.log(c);
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc('A', 'B')
// const myFunc = (a: string, b: string, c: string = 'true') => {
//     console.log(c);
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc('A', 'B')
// const myFunc = (a: string, b: string, c: string = 'true') => {
//     return a+ b
// }
// myFunc('A', 'B')
// const myFunc = (a: number, b: number, c: string = 'true') => {
//     return a + b
// }
// myFunc(4, 5)
// //TYPE ALIASE
// const userDetails = (
//     id: string | number,
//     user: { name: string; age: number }
// ) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }
// const sayHello = (user: { name: string; age: number }) => {
//     console.log(`Hello ${user.age> 50 ? 'Sir' : 'Mr.'} ${user.name}`);
// }
// type stringOrNum = string | number;
// type userType = { name: string; age: number };
// const userDetails = (id: stringOrNum, user: userType) => {
//   console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };
// //  Function Signatures
// let add: (x: number, y: number) => number;
// add = (a: number, b: number) => {
//     return a + b;
// }
// let calculation: (x: number, y: number, z: string) => number;
// calculation = (a: number, b: number, c: string) => {
//   if (c === "add") {
//     return a + b;
//   } else {
//       return a - b
//   }
// };
// console.log(calculation(5, 6, 'minus'));
// let userDetails: (id: number | string, userInfo: {
//     name: string,
//     age: number,
// }) => void;
// userDetails = (id: number | string, user: {
//     name: string;
//     age: number
// }) => {
// };
// // CLASS
// class Player {
//     name: string;
//     age: number;
//     country : string;
//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play() {
//         console.log(`${this.name} from ${this.country}is playeing`);
//     }
// }
// const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
// const shakib = new Player('Shakib', 21, 'Bangladesh');
// const player: Player[] = []
// player.push(shakib)
// player.push(mashrafi)
// // Access Modifiers
// class Player {
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(`${this.name} from ${this.country}is playeing`);
//   }
// }
// const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// const shakib = new Player("Shakib", 21, "Bangladesh");
// shakib.name = "Tamim iqubal";
// shakib.age = 21;
// shakib.country = "England";
// console.log(shakib.name);
// console.log(shakib.age);
// console.log(shakib.country);
// const player: Player[] = [];
// player.push(shakib);
// player.push(mashrafi);
// // Module system
// import { Player } from "./classes/Player.js";
// import { IsPlayer } from "./interfaces/IsPlayer.js";
// const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// let shakib: IsPlayer;
// shakib  = new Player("Shakib", 21, "Bangladesh");
// const player: Player[] = [];
// player.push(shakib);
// player.push(mashrafi);
// interface RectangleOptions {
//     width: number;
//     length: number;
// }
// function drawRectangle(optons: RectangleOptions) {
//     let width = optons.width;
//     let length = optons.length;
// }
// let threeDdoptions = {
//     width: 30,
//     length: 20,
//     height: 10,
// }
// drawRectangle(threeDdoptions);
// // GENERICS
// const addID = <T extends {name: string; age: number}>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return {...obj, id};
// }
// let user = addID({
//     name: 'Mashrafi',
//     age: 36,
//     country: 'Bangladesh'
// })
// addID(user);
// interface APIResponse<T> {
//     status: number;
//     type: string;
//     data: T;
// }
// const response1: APIResponse<string> = {
//     status: 200,
//     type: 'good',
//     data: 'test'
// }
// // ENUM
// enum RType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN};
// interface APIResponse<T> {
//     status: number;
//     type: RType;
//     data: T;
// }
// const response1: APIResponse<string> = {
//     status: 200,
//     type: RType.SUCCESS,
//     data: 'test'
// }
// console.log(response1);
// TUPLES
let a = [3, 'hello', { p: 3 }];
let b = [4, 'world', { t: 1 }];
