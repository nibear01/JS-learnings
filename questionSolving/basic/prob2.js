// Write a Program to check whether a string is a palindrome string.

function palindromeChecker(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (reversedStr === str) {
    return true;
  }

  return false;
}

console.log(palindromeChecker("GFG")); //true
console.log(palindromeChecker("GFVG")); //false
console.log(palindromeChecker("1GFFG1")); //true


// using built in functions
let str = 'GVG';
const res = str.split("").reverse().join("") ? true : false;
console.log(res); // true
