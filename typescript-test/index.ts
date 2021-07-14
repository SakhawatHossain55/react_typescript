// Any, number, string,, boolean,, object, array, tuple, enum, undefined, null, void, never, unknown

let myName: string = "Sakhawat Hossain";
let age: number;
let isHungry: boolean = false;

// amra exject value set kore dite pari  amra je value set kore dibo tar baire jodi kono kicu di ta nibe na
type direction = 'left' | 'right' | 'top' | 'bottom'

let gameDiraction: direction = 'left' 

 // ( | ) ==> union   // ati or ar moto kaj kore
let student: String | Number = 371;
student = 'shakib-371'

// type LES   // aibabe kore amra (union) diye type set kore dite noPropertyAccessFromIndexSignaturi
type StringOrNumber = string | number  

let studentId: StringOrNumber = 371;
studentId = 'shakib-371'

// object

//aibabe amra objece ar type set korte pari
let person: { name: string, age: number, hobby: string } = {    
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
}


// aibabe kore objece ar type set keo kra jai
type PersonType = { name: string, age: number, hobby: string }

let person2: PersonType = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
}

let person3: PersonType = {
    name: 'Shakib',
    age: 21,
    hobby: 'Facebooking'
}

// amra (interface) diye object ar skima banaite pari atio object type ar motoi kaj kore 
interface PersonType2 {
    name: string,
    age: number,
    hobby: string,
}

let person4: PersonType2 = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
}

let person5: PersonType2 = {
    name: 'Shakib',
    age: 21,
    hobby: 'Facebooking'
}


// escrima
// amra (interface) ar bitorer balu  gulo ke opshonal babe set korte pari je baluta ke amra opshonal kore dibo seta amader objecter ar bitore thakteo pare nao thakte pare
interface PersonType3 {
    name: string,
    age?: number,
    hobby?: string,
}

let person6: PersonType3 = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
}

let person7: PersonType3 = {
    name: 'Shakib',
    age: 21,
}

let person8: PersonType3 = {
    name: 'Sakhawat Hossain',
    hobby: 'Codding'
}

// Array 
const numbers: number[] = [40, 50, 60, 70]
const numbers1: any[] = [40, 50, 60, 'jojib', 'robin' ]
const numbers2: (number | string)[] = [40, 50, 60, 'jojib', 'robin' ]

const persons: object[] = [
    {
        name: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding'
    },
    {
        name: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding'
    },
    {
        name: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding'
    }
]

// amra jodi aibabe set kori tahoe amader object ar bitore kono kicu bul kora jabe na  
interface Persons {
    name: string,
    age: number,
    hobby: string,
}

const persons1: Persons[] = [
    {
        name: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding'
    },
    {
        name: 'Sakhawat Hossain',
        age: 21,
        obby: 'Codding'
    },
    {
        ame: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding'
    }
]


// amra (interface) ar bitore akadik objecto o set korte parbo
interface Persons1 {
    name: string,
    age: number,
    hobby: string,
    more: {
        name: boolean
    }
}

const persons2: Persons1[] = [
    {
        name: 'Sakhawat Hossain',
        age: 21,
        hobby: 'Codding',
        more: {
            name: true,
        }
    },
    {
        name: 'Sakhawat Hossain',
        age: 21,
        obby: 'Codding',
        more: {
            name: 'shakib',
        }
    }
]

// function

// typescript a amra jodi function ar bitore parameter dite  cai tahole type set kore dite hoi nahoi error dei
// akti function jodi kono kicu ritran na kore tahole ( void ) set kore dite hoi jodi amra ( void ) set kore di tokhon ar kono kicu return kora jai na 

// void hocce akti deta type
const greeting = (name: string) : void => {
    console.log(`Hello ${name}`);
}

greeting("shakib")

const greetings = (name: string) : void => {
    console.log(`Hello `);
    return 'asdfg'
}

const add = (a: number, b: number): number => {
    return a + b
}

// amra number ar kotha bole jodi sring return kori tahole error dibe
const add1 = (a: number, b: number): number => {
    return `The result is ${a+b}`
}

// escrima
interface Persons3 {
    name: string,
    age: number,
    hobby?: string,
}

const introduce = (person: Persons3): void => {
    console.log(`Hello, my name is ${person.name} And i am ${person.age}`);
    
}

introduce({
    name: "shakib",
    age: 21,
    hobby: 'Codding'
})


// amra caile desticture koreo likhte pari 
const introduce1 = ({name, age}: Persons3): void => {
    console.log(`Hello, my name is ${name} And i am ${age}`);
    
}

introduce1({
    name: "Sakhawat Hossain",
    age: 21,
    hobby: 'Codding'
})


// aikhane bola hoice je aikhane argument hisebe akti string[] dite hobe ar return korte hobe string[] jodi aikhne kono number or boolean dei tahole error dibe
const getArray = (arr: string[]): string[] => {
    return arr
}

getArray(['asdfg', 'lkjh'])


// Generic type
const getArray1 = <T>(arr: T[]): T[] => {
    return arr
}

getArray1<string>(['asdfg', 'lkjh'])

// enum type

// enum Week {
//     Sat,
//     Sun,
//     Mon,
//     Tue,
//     Wed,
//     Thr,
//     Fri,
// }

// console.log(Week.Mon);

enum Week {
    Sat = 'SAT',
    Sun ='SUN',
    Mon = 'MON',
    Tue = 'TUE',
    Wed = 'WED',
    Thr = 'THR',
    Fri = 'FRI',
}

console.log(Week.Mon);

