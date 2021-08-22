const country = "I love Bangladesh";
console.log(country);

let playerName = "Masharafi";
console.log(playerName);

let age = 34;
console.log(age);

let playerName1;
playerName1 = "Masharafi";
playerName1 = 34;
// console.log(playerName1);

// function
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(5, 4));
// console.log(multiply("hello" , 4));      // error

// array

let fruits = ["apple", "orange", "banana"];
fruits.push("multa");
// fruits.push(45)      // error

// object

let person = {
  name: "oishani",
  age: 45,
  isCaptain: true,
};

// person.country = 'United States'         // error

let a: string;
let b: number;

a = "sumit";
b = 45;

// ARRAY
let a1: string[] = [];
a1.push("sumit", "person");
// a1.push(454, 12);    // error

let a2: (string | number)[] = [];

a2.push("sumit", 12);
// a2.push("sumit", 12, true); //error

// object

let c: {
  name: string;
  age: number;
  adult: boolean;
};

c = {
  name: "Fimran",
  age: 45,
  adult: false,
};

// c = [
//     name = 'NAME',       // error
// ]

// const myFunc = (a: string, b: string, c?:string) => {       // c = undefined
const myFunc = (a: string, b: string, c: string = "10") => {
  console.log(c);

  console.log(`Hello ${a} ${b}`);
};
// myFunc(4, 5)
myFunc("A", "B");

// VOID
const myFunc3 = (a: string, b: string, c: string = "10"): void => {
  console.log(c);
  console.log(`Hello ${a} ${b}`);
};
// myFunc(4, 5)
myFunc3("A", "B");

// type
const myFunc4 = (a: string, b: string, c: string = "10") => {
  return a + b;
};
// myFunc(4, 5)
myFunc4("A", "B");

let myFunc2: Function;

myFunc2 = () => {
  console.log("Hello world!");
};

// const userDetails = (
//     id: string | number,
//     user: { name: string, age: number}
// ) => {
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }

// const sayHello = (user: { name: string; age: number}) => {
//     console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);

// }

// code modifi

type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

let add: (x: number, y: number) => number;

// add = (a: number, b: number) => {
//     console.log(a + b);                  // error
// }

add = (a: number, b: number) => {
  return a + b;
};

// let calculaton: (x: number, y: number, z: string) => number;
// calculaton = (a: number, b: number, c: string) => {
//     if( c === 'add') {
//         return a + b
//     } else {
//         return a - b;
//     }
// }

// console.log(calculaton( 5, 6, 'minus'));

let userDetails2: (
  id: number | string,
  userInfo: {
    name: string;
    age: number;
  }
) => void;

userDetails2 = (
  id: number | string,
  user: {
    name: string;
    age: number;
  }
) => {};


// FAST COPY
// class Player {
//     private name: string;
//     public age: number;
//     readonly country: string;

//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

//     palay(){
//         console.log(`${this.name} form ${this.country} is playing!`);
//     }
// }

// const mashrafi = new Player('Mashrafi', 40, 'Bangladesh')
// const sakib = new Player('Shakib', 34, 'Bangladesh')

// // sakib.name = 'Mashrafi'
// sakib.age = 40
// // sakib.country = 'England'

// // console.log(mashrafi.name);     // private
// console.log(mashrafi.age);
// // console.log(mashrafi.country);      // readonly

// const players: Player[] = []

// players.push(sakib)
// players.push(mashrafi)



// SECOND COPY
// class Player {
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}

//   palay() {
//     console.log(`${this.name} form ${this.country} is playing!`);
//   }
// }

import {Player} from './classes/Player.js';
import { IsPlayer } from './interpaces/isPlayer.js';

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
let sakib: IsPlayer;

sakib = new Player("Shakib", 34, "Bangladesh");


// console.log(mashrafi.name);     // private
console.log(mashrafi.age);
// console.log(mashrafi.country);      // readonly

const players: IsPlayer[] = [];

players.push(sakib);
players.push(mashrafi);



// GENERICS       ///////// ENUMS korar karone comment kore rakha hoice 

// const addID = <T extends {
//   name: string;
//   age: number;
// }>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return {...obj, id};
// };

// let user = addID({
//   name: "mashrafi",
//   age: 36,
//   country: "Bangladesh"
// })

// addID(user)


// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }

// const response1: APIResponse<object> = {
//   status: 200,
//   type: "good",
//   data: {
//     name: 'test',
//     something: 100
//   }
// }

// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }

// const response2: APIResponse<string> = {
//   status: 200,
//   type: "good",
//   data: 'test'
// }

//ENUMS
enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN} 

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response3: APIResponse<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: 'test'
}

console.log(response3);


// TUPLES

let d = [3, 'hello', {p: 3}]

let e: [number, string, object] = [4, 'world', {t: 5}]


