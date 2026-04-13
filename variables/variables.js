let name;    // declare a variable
name = "Naved"; // initialize a varible
console.log(name);  // used the varible

// variables 3 type (var, let, const)
/*
var = global scoped. can be re declared after first declaration. 
    this can create issue like overwriting variables.
*/

var a =10;
var a = 20;
console.log(a);  // first a value is getting lost due to twice declaration of var

{
    console.log(a);  // var declared variables works inside
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
