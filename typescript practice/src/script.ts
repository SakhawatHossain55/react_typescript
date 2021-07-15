// // ** What is TypeScript?
// // Supperset of JavaScript created by Microsoft
// // Extra features - interfaces, enums, temples, generics
// // supperts moder features (arrow functions, let, const)
// // Based on the .NET harmony specification 

// let playerMane;
// playerMane = "Mashrafi"
// playerMane = 15;

// console.log(playerMane);


// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(3,4));


// // array

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
 

// class Player {
//     name: string;
//     age: number;
//     current: string;

//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.current = c;
//     }
//     play() {
//         console.log(`${this.name} from ${this.current} is playing`);
        
//     }
// }

// const mashrafi = new Player('Mashrafi', 40, 'Bangladesh')
// const shakib = new Player('Shakib', 35, 'Bangladesh')

// const players:  Player[] = []

// players.push(shakib)
// players.push(mashrafi)
 

// import { Player } from './classes/Player.js'

// const mashrafi = new Player('Mashrafi', 40, 'Bangladesh')
// const shakib = new Player('Shakib', 35, 'Bangladesh')

// console.log(shakib.age);
// console.log(shakib.country);


// const players:  Player[] = []

// players.push(shakib)
// players.push(mashrafi)


// interface RatangleOptions {
//     width: number;
//     length: number;
// }
// function drawRectangle(optons: RatangleOptions) {
//     let width = optons.width;
//     let length = optons.length;
// }

// let threeDdoptions = {
//     width: 30,
//     length: 20,
//     height: 10
// }

// drawRectangle(threeDdoptions)



// import { IsPlayer } from './interfaces/IsPlayer.js';
// import { Player } from './classes/Player.js'

// const mashrafi = new Player('Mashrafi', 40, 'Bangladesh')
// let shakib: IsPlayer;

// shakib = new Player('Shakib', 35, 'Bangladesh')

// const players:  Player[] = []

// players.push(shakib)
// players.push(mashrafi)


// //GENERICS
// const addID = <T extends {
//     name: string;
//     age: number;
// }>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return {...obj, id}
// };

// let user = addID({
//     name: "Masharafi",
//     age: 40,
//     country: "Bangladesh"
// })


// addID(user)


// interface APIResponse<T> {
//     status: number;
//     type: string;
//     data: T;
// }

// const response1: APIResponse<string> = {
//     status: 200,
//     type: "good",
//     data: "test"
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
//     data: "test"
// }

// console.log(response1);


// // TUOLES

// let a = [3, 'hello', {p: 3}];
// // right
// let b:[number, string, object] = [4, 'World', {t:1}]
// // rong
// b[1] = 4


