//3. Comparion Operators (==, ===, !=, !==, >, <, >=, <=)
//losely type checks only value. it doesnt check datatype.
const compare1 = 5 == 5;
console.log(compare1); //true --> checked losely equals to.

const compare2 = "5" == 5;
console.log(compare2); //true

const compare5 = " " == 0;
console.log(compare5); //true

const compare6 = "true" == true;
console.log(compare6); //false

//strictly type checks both the value and datatype. checks datatype then value.
const compare3 = 5 === 5;
console.log(compare3); //true --> checked losely equals to.

const compare4 = "5" === 5;
console.log(compare4); //false

const compare7 = " " === 0;
console.log(compare7); //false

const compare8 = "true" === true;
console.log(compare8); //false

const compare9 = "true" === "true";
console.log(compare9); //true

// !=, !== --> these have similar concepts as == and  ===
const compare10 = 5 != "5";
console.log(compare10); // false

const compare11 = 5 !== "5";
console.log(compare11); // true

// >, <, >=, <= --> checks if a number is greater or not
console.log(5 > 10); //false
console.log(5 < 10); //true
console.log(5 >= 5); //true
console.log(5 <= 3); //false
