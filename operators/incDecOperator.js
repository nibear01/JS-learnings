//5. increment/decrement operator (++, --)
// both has post(after) and pre(before) type
let x = 5;
x++;
console.log(x); //6
console.log(x++); //6
console.log(x); //7
console.log(++x); //8

x--;
console.log(x); //5

//Q:
let a = 10;
let result = a++ + ++a - 10;
console.log(result); //12

let b = 10;
let res = b++ + b++ + ++b + ++b + 10;
console.log(res);
