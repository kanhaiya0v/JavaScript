"use strict"; // treat all JS code as newer version

// alert(3 + 3)  // working only on browser


let name = "Kanhaiya"
let year = 2
let isStudent = true


// number - 2^53 
// bigInt stores  > 2^53
// string = ""
// boolean => true/false
// null
// undefined
// symbol (mostly using for usiqueness)


// object

console.log(typeof year)
console.log(typeof(year))
console.log(typeof null)
console.log(typeof undefined)


/*************************NOTES ******************/

//******** Primitive ************************

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const num = 9
const num_2 = 7.8

const flag = true

const outSideTemp = null

let user;
let user_ = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 87654323456788765446890n


//********* Reference(Non primitive) ********

// Array, Objects, Functions

const names = ["Kanhaiya","Varma"]
let myObj = {
    name: "Kanhaiya",
    year: "2nd",
    GPA: 7.5,
}
const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof names);

/* JavaScript is a dynamically typed language */


/************************************************************/

// Stack(Primitive), Heap(Non primitive)

let name_ = 'Kanhaiya'
let anotherName = name_
console.log(anotherName);
anotherName = 'Verma'
console.log(name_)

let studentOne = {
    name_: "Rahul",
    age: 34,
    upi: "837@ybl",
}

let studentTwo = studentOne

studentTwo.name_ = "Ramu" 

console.log(studentOne);