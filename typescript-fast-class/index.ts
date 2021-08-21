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

const myName: string = "Sakhawat Hossain";

const age: number = 21;

const isHungry: boolean = false;

type StringOrNumber = number | string;

let studentId: StringOrNumber = 371;
studentId = "student";
studentId = 371;

let person: { name: string; age: number; hobby: string } = {
  name: "Sakhawat Hossain",
  age: 21,
  hobby: "Sleeping",
};

type PersonType = { name: string; age: number; hobby: string };

let person2: PersonType = {
  name: "Oishani Hossain",
  age: 21,
  hobby: "Sleeping",
};

interface Person3 {
  name: string;
  age: number;
  hobby: string;
}

let person3: Person3 = {
  name: "Oishani Hossain",
  age: 21,
  hobby: "Sleeping",
};

interface Person4 {
  name: string;
  age: number;
  hobby?: string;
}

let person4: Person4 = {
  name: "Oishani Hossain",
  age: 21,
};

// Array

const number: number[] = [52, 45, 63, 52];

const number2: (number | string)[] = [52, 45, 63, 52, "Hello"];

const persons: object[] = [
  {
    name: "Oishani Hossain",
    age: 21,
    hobby: "Sleeping",
  },
];

const persons2: Person3[] = [
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


const greetings = (name: string) : void => {
    console.log(`Hello ${name}`);
}

greetings("Oishee")

const add = (a: number, b: number): number => {
    return a + b;
}

const introduce = (person: Person4): void => {
    console.log(`Hello my name is ${person.name} I am ${person.age}`);
    
}
  
introduce({
    name: "Oishani Hossain",
    age: 21,
    hobby: "Sleeping",
  },)

