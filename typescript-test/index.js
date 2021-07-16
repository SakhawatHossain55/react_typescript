"use strict";
// TypeScript is an open-source language that builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
// What is typescript? ==> TypeScript is a suppersuperset of JavaScritp, it's adds optional static typeing to the language.
// Any, number, string,, boolean,, object, array, tuple, enum, undefined, null, void, never, unknown
var myName = "Sakhawat Hossain";
var age;
var isHungry = false;
var gameDiraction = 'left';
// ( | ) ==> union   // ati or ar moto kaj kore
var student = 371;
student = 'shakib-371';
var studentId = 371;
studentId = 'shakib-371';
// object
//aibabe amra objece ar type set korte pari
var person = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
};
var person2 = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
};
var person3 = {
    name: 'Shakib',
    age: 21,
    hobby: 'Facebooking'
};
var person4 = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
};
var person5 = {
    name: 'Shakib',
    age: 21,
    hobby: 'Facebooking'
};
var person6 = {
    name: 'Sakhawat Hossain',
    age: 21,
    hobby: 'Codding'
};
var person7 = {
    name: 'Shakib',
    age: 21,
};
var person8 = {
    name: 'Sakhawat Hossain',
    hobby: 'Codding'
};
// Array 
var numbers = [40, 50, 60, 70];
var numbers1 = [40, 50, 60, 'jojib', 'robin'];
var numbers2 = [40, 50, 60, 'jojib', 'robin'];
var persons = [
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
];
var persons1 = [
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
];
var persons2 = [
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
];
// function
// typescript a amra jodi function ar bitore parameter dite  cai tahole type set kore dite hoi nahoi error dei
// akti function jodi kono kicu ritran na kore tahole ( void ) set kore dite hoi jodi amra ( void ) set kore di tokhon ar kono kicu return kora jai na 
// void hocce akti deta type
var greeting = function (name) {
    console.log("Hello " + name);
};
greeting("shakib");
var greetings = function (name) {
    console.log("Hello ");
    return 'asdfg';
};
var add = function (a, b) {
    return a + b;
};
// amra number ar kotha bole jodi sring return kori tahole error dibe
var add1 = function (a, b) {
    return "The result is " + (a + b);
};
var introduce = function (person) {
    console.log("Hello, my name is " + person.name + " And i am " + person.age);
};
introduce({
    name: "shakib",
    age: 21,
    hobby: 'Codding'
});
// amra caile desticture koreo likhte pari 
var introduce1 = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hello, my name is " + name + " And i am " + age);
};
introduce1({
    name: "Sakhawat Hossain",
    age: 21,
    hobby: 'Codding'
});
// aikhane bola hoice je aikhane argument hisebe akti string[] dite hobe ar return korte hobe string[] jodi aikhne kono number or boolean dei tahole error dibe
var getArray = function (arr) {
    return arr;
};
getArray(['asdfg', 'lkjh']);
// Generic type
var getArray1 = function (arr) {
    return arr;
};
getArray1(['asdfg', 'lkjh']);
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
var Week;
(function (Week) {
    Week["Sat"] = "SAT";
    Week["Sun"] = "SUN";
    Week["Mon"] = "MON";
    Week["Tue"] = "TUE";
    Week["Wed"] = "WED";
    Week["Thr"] = "THR";
    Week["Fri"] = "FRI";
})(Week || (Week = {}));
console.log(Week.Mon);
