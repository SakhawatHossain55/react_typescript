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

// let a = [3, 'hello', {p: 3}]
// let b: [number, string, object] = [4, 'world', {t: 1}]
////////// Larn Width Sumit ///////////

// type Props = {
//     children: React.ReactNode;
// };

// function Comp({children}: Props) {
//     return<div>{children}</div>;
// }

// function App() {
//     return <Comp>{{}}</Comp>
// }


// // interface a amata jeta set kore adibo setia amra ui code a set korte hobe ar baire kono kicu add korea jabe an.
// interface User {
//     name: string;
//     id: number;
//   }

//   const user: User = {
//   name: "Hayes",
//   id: 0,
// };



// interface User {
//     name: string;
//     id: number;
//   }
  
//   const user: User = {
//     username: "Hayes",
// //Type '{ username: string; id: number; }' is not assignable to type 'User'.
// // Object literal may only specify known properties, and 'username' does not exist in type 'User'.
//     id: 0,
//   };



// interface User {
//     name: string;
//     id: number;
// }

// class UserAccount {
//     name: string;
//     id: number;

//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const user: User = new UserAccount("Murphy", 1);

// // Unions
// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderIen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

// function getLength(obj: string | string[]) {
//     return obj.length
// }


// function wrapInArray(obj: string | string[]) {
//     if (typeof obj === 'string') {
//         return(obj);
//                 // (parameter) obj: string
//     }
//     return obj;
// }



// // Generics

// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>

// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);
// // Argument of type 'number' is not assignable to parameter of type 'string'.

// interface Point {
//     x: number;
//     y: number;
// }

// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }

// // logs "12, 26"
// const point = {x: 12, y: 26};
// logPoint(point);

// const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect); // logs "33, 3"

// const color = { hex: "#187ABF" };
// logPoint(color);

// // rgument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
// //   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

// class VirtualPoint {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
// }

// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint); // logs "13, 56"


interface Pointlike {
    x: number;
    y: number;
}
interface Named {
    name: string;
}

function logPoint(point: Pointlike) {
    console.log("x = " + point.x + ", y = " + point.y);
}

function logName( x: Named ) {
    console.log("Hello, " + x.name);
}

const obj = {
    x: 0,
    y: 0,
    name: "Origin",
};

logPoint(obj)
logName(obj)
