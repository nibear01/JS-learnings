let name; // declare a variable
name = "Naved"; // initialize a varible
console.log(name); // used the varible

// variables 3 type (var, let, const)
/*
var = global scoped. can be re declared after first declaration. 
    this can create issue like overwriting variables.
*/

var a = 10;
var a = 20;
console.log(a); // first a value is getting lost due to twice declaration of var

{
  console.log(a); // var declared variables works inside
  var b = 10;
}

console.log(b); // var variables declared inside a scope works outside of that scope

//let = local scope. can't declare a variable twice. it can update the variables data.
let c = 10;
// let c = 100; //it will get stuck in this line as declared same variable twice.

{
  let d = 10;
}
// console.log(d); // d cant be print as it exist in local scope

//cosnt = keeps a value const in the variable can't be updated once it is initialized.

const age = 20;
//age = 10; // we cant modify it. it will say: Assignment to constant variable.

// DATA TYPES IN JS:
/*
DATATYPES can be primitive and non-primitive.
Number, Null, String, Symbol, Undefined, Boolean and BigInt
*/

const num1 = 10; //number
const num2 = 10.5; // double/float
const fullName = "Naved Abrar Nibir"; //String 
// const courses; //undefined
const isStudent = true; //boolean
const population = 83245890508235082508324502345 //Big int

//js is dynamically typed language, eg:
let person = "Murshidul";
console.log(person); // output: Murshidul
person = 10;
console.log(person); // output: 10

// so we can easily change type of the data from the initial assigned type
// js is a forgiving language as it fogives small syntax error like not giving error for using ";" in certain cases. 

const syn1 = "5" + 3;
const syn2 = "5" - 3;
console.log(syn1, typeof syn1); //['53',string] -> converts the number into string, while addition
console.log(syn2, typeof syn2); //[2, number] -> converts the string into number, while subtraction

console.log(typeof null);
console.log(typeof NaN); //number
console.log(3 + "10"); //310
console.log(10 - "4", typeof(10 - "4")); //6, number
console.log(10 - "20"); //-10
