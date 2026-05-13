//How Remove and add an item from first index from an array in JavaScript?

//using shift and unshift
let arr = [1, 2, 3, 4, 5];
const firstElement = arr.shift(); // removes first element
console.log(firstElement);

const lastElement = arr.unshift(40); //adds elements to the beginning of an array.
// if no argument given to unshift, Returns the current length of the array.
console.log(lastElement);

console.log(arr); //[ 40, 2, 3, 4, 5 ]

//using slice --> creates a copy of the orginal array
//slice makes a shallow copy for arr --> for primitive values
let original = [2, 3, 5];
let copy = original.slice();

copy[0] = 100;

console.log(original); //[ 2, 3, 5 ]
console.log(copy); //[ 100, 3, 5 ]

//modifying internal property 
let original1 = [ { user: "Alex" } ];
let copy1 = original1.slice();

copy1[0].user = "Sam"; // Modifying a property inside the object

console.log(copy1[0].user);     // "Sam"
console.log(original1[0].user); // "Sam" <-- CHANGED!


//using function
function removeFirstItem(arr) {
  return arr.shift();
}

console.log(removeFirstItem(arr)); //40
