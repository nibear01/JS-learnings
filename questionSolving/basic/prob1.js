// Write a Program to reverse a string in JavaScript.

function reverseStr(str) {
  let newStr = "";

  console.log(str.split("")); //[ 'A', 'B', 'C', 'D', 'E' ]

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

const str = "ABCDE";
console.log(reverseStr(str));  //'EDCBA'
