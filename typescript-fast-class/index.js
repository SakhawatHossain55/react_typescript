"use strict";
// // Any, number, string,, boolean,, object, array, tuple, enum, undefined, null, void, never, unknown
// let myName: string = 'Sakhawat Hossain'
// let age: number = 10
// let isHungry: boolean = false;
// let studentId: number | string = 371;
// studentId = 'shakib-371'
// type StringOrNumber = number | string
// let studentId: StringOrNumber = 371;
// studentId = 'shakib-371'
// studentId = 49641
// let person: object = {
//     name : 'Shakib',
//     age : 21,
//     hobby: 'chatting'
// };
// type PersonType = { name: string, age: number, hobby: string }
// let person: PersonType = {
//     name : 'Shakib',
//     age : 21,
//     hobby : 'chatting'
// }
// let person01: PersonType = {
//     name : 'Shakib',
//     age : 21,
//     hobby : 'chatting'
// }
// interface Preson {
//     name: string;
//     age: number;
//     hobby: string;
// }
// let person: Preson = {
//     name : 'Shakib',
//     age : 21,
//     hobby : 'chatting'
// }
// let person01: Preson = {
//     name : 'Shakib',
//     age : 21,
//     hobby : 'chatting'
// }
// // Array
// const numbers: (number | string)[] = [1, 2, 3, 4, 5] 
// const persons: object[] = [
//     {
//         name: "Solaimen Shadin",
//         age : 21,
//         hobby : 'chatting'
//     },
//     {
//         name: "Solaimen Shadin",
//         age : 21,
//         hobby : 'chatting'
//     },
//     {
//         name: "Solaimen Shadin",
//         age : 21,
//         hobby : 'chatting'
//     }
// ]
// // FUCNTIONS
// const greeting = (name: string): void => {
//     console.log(`Hello ${name}`);
// }
// greeting("Shadin")
// const introduce = (person: Preson): void => {
//     console.log(`Helllo my name is ${person.name
//     } I Am ${person.age}`);
// }
// introduce({
//     name: 'Shakib',
//     age : 36,
//     hobby: "Solaimen"
// })
var Week;
(function (Week) {
    Week["Sat"] = "Sun";
    Week["Sun"] = "Sun";
    Week["Mon"] = "Mon";
    Week["Tue"] = "Tue";
    Week["Wed"] = "Wed";
    Week["Thr"] = "Thr";
    Week["Fri"] = "Fri";
})(Week || (Week = {}));
console.log(Week.Mon);
