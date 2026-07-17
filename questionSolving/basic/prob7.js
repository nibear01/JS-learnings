//Convert a negative number to positive in JavaScript

function convertNegToPos(num) {
  if (num < 0) {
    return num * -1;
  }
  return num;
}

console.log(convertNegToPos(-20)); // 20
console.log(convertNegToPos(10)); //10
