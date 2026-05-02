//2. Assignment operator: (=, +=, -+, *=, /=, %=, **=) --> Assigns values into variables
const num = 10; // assigned a number into variable num. we can do same for other datatypes too.

let year = 2026;
year += 1;
console.log(year); //2027 --> add assignment

year -= 1;
console.log(year); //2026 --> sub assignment

let task = 5;
task *= 5;
console.log(task); //25 --> mul assignment

task /= 5;
console.log(task); //5  --> div assignment

task %= 3;
console.log(task); //2 --> return the remainder: 5%3 = 2

task **= 5;
console.log(task); //32 --> exponent calculation using assignment operator
