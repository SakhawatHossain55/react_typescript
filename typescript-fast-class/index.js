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
// enum Week {
//     Sat = 'Sun',
//     Sun = 'Sun',
//     Mon = 'Mon',
//     Tue = 'Tue',
//     Wed = 'Wed',
//     Thr = 'Thr',
//     Fri = 'Fri',
// }
// console.log(Week.Mon);
////////////////////////////////////////// second taime practch
// // Any, number, string,, boolean,, object, array, tuple, enum, undefined, null, void, never, unknown
var myName = "Sakhawat Hossain";
var age = 21;
var isHungry = false;
var studentId = 371;
studentId = "student";
studentId = 371;
var person = {
    name: "Sakhawat Hossain",
    age: 21,
    hobby: "Sleeping",
};
var person2 = {
    name: "Oishani Hossain",
    age: 21,
    hobby: "Sleeping",
};
var person3 = {
    name: "Oishani Hossain",
    age: 21,
    hobby: "Sleeping",
};
var person4 = {
    name: "Oishani Hossain",
    age: 21,
};
// Array
var number = [52, 45, 63, 52];
var number2 = [52, 45, 63, 52, "Hello"];
var persons = [
    {
        name: "Oishani Hossain",
        age: 21,
        hobby: "Sleeping",
    },
];
var persons2 = [
    {
        name: "Oishani Hossain",
        age: 21,
        hobby: "Sleeping",
    },
    {
        name: "Oishani Hossain",
        age: 21,
        hobby: "Sleeping",
    },
];
var greetings = function (name) {
    console.log("Hello " + name);
};
greetings("Oishee");
var add = function (a, b) {
    return a + b;
};
var introduce = function (person) {
    console.log("Hello my name is " + person.name + " I am " + person.age);
};
introduce({
    name: "Oishani Hossain",
    age: 21,
    hobby: "Sleeping",
});
