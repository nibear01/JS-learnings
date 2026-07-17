// Convert string to integer without using parseInt() function

function convertStrToInt(str) {
  // without corner case checking
  //   const res = Number(str);
  //   console.log(res); //123
  //   console.log(typeof(res));

  // with corner case checking
  // using built-in Number.isNaN() --> it checks in the item is NaN as NaN can't be detected using typeof function.
  let res = "";
  for (let i in str) {
    let check = Number(str[i]);
    if (!Number.isNaN(check)) {
      res += str[i];
    }
  }
  return Number(res);
}

console.log(convertStrToInt("123dsfa"));
