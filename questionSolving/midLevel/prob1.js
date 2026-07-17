//Generating all combinations of a string in JavaScript - Dog => Possible Combination [D], [Do], [Dog], [o], [og], [g]

function strCombinations(str) {
  let combos = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combos.push(str.slice(i, j));
    }
  }
  return combos;
}

console.log(strCombinations("dog")); //Array(6) [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

