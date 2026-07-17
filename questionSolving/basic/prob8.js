// How to Flatten a Given Array up to Specified Depth in JavaScript

//using recursion
function flattenArrFunction(arr, result = []) {
  for (let i in arr) {
    console.log(arr[i]);

    if (Array.isArray(arr[i])) {
      flattenArrFunction(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const array = [1, [2, [3, [4, 5]]]];
console.log(flattenArrFunction(array)); //[ 1, 2, 3, 4, 5 ]


// using built in function
const array1 = [1, [2, [3, [4, 5]]]];
const newArr = array1.flat(Infinity);
console.log(newArr); //[ 1, 2, 3, 4, 5 ]
