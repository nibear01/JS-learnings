// nullish-coalesing operator (??)

//line breaks checking when a true value is found
//that value is returned
let name = "" || null || "Naved" || 0 || undefined;
console.log(name); //Naved

console.log("" && null && 35 && "Naved");  //""
console.log(" " && null && 35 && "Naved"); //null
console.log(" " && undefined && 35 && "Naved"); //undefined
console.log(" " && 0 && 35 && "Naved"); // 0
console.log(" " && true && 35 && "Naved"); //Naved




