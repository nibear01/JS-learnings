//Find the largest number in an array in JavaScript.

function findLargestNumber(arr) {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([100, 2, 50, 500, 476, 289])); //500
console.log(findLargestNumber([100, 2, 50, 500, 476, 889])); //889
