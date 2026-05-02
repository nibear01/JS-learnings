//4. logical operator(&&, ||, !) --> AND,OR,NOT
//AND --> all conditions must be true
const age = 10;
const currentYear = 2026;
console.log(age < 10 && currentYear < 2030); //true
console.log(age < 10 && currentYear > 2020); //false
console.log(age >= 10 && currentYear > 2030); //false
console.log(age >= 10 && currentYear > 2000); //true

//OR --> checks if any one is true or not
console.log(age < 9 || currentYear < 2000); //true
console.log(age < 10 || currentYear > 2020); //false
console.log(age >= 10 || currentYear > 2030); //false
console.log(age >= 10 || currentYear > 2000); //true

//NOT --> checks the oposite logic
console.log(!5); //false
console.log(!!5); //true
console.log(!(age < 10)); //true
