"use strict";
// // Boolen
// let isDone: boolean = false;
// // Number
// let decimals: number = 0;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// // let big: bigint = 100n;
// // String
// let color: string = "blue";
// color: 'red';
// // Backtick/backquote (`) 
// let fullName: string = `Bob Bobbington`;
// let age: number = 37;
// let setence:  string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old.`
// // Array
// let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3]
// Tuple
// // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ["hello", 10]; // OK
// // Initialize it incorrectly
// x = [10, "hello"]; // Error
// let x: [string, number];
// x = ["hello", 10]; 
// console.log(x[0].substring(1));
// // console.log(x[1].substring(1)); 
// /// Property 'substring' does not exist on type 'number'.
// const str = 'Mozilla'
// console.log(str.substring(1, 3));
// // expected output: "oz"
// console.log(str.substring(4));
// // expected output: "lla"
// let text = 'Mozilla'
// console.log(text.slice(-5, 2))   // => ""
// console.log(text.slice(-5, -2))  // => "zil"
// // ENUM 
// enum RType {
//     SUCCESS,
//     FAILURE,
//     UNAUTHENTICATED,
//     FORBIDDEN,
// }
// interface APIResponse<T> {
//     status: number;
//     type: RType;
//     data: T;
// }
// const response1: APIResponse<string> = {
//     status: 200,
//     type: RType.SUCCESS,
//     data: 'test',
// }
// console.log(response1);
// // Void
// function warnUser(): void {
//     console.log('This is my warning message');
// }
