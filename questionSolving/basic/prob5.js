//Write a Program to add N numbers of property to an object?

function addProperty(obj, objList) {
  for (let i in objList) {
    obj[i] = objList[i];
  }
  return obj;
}

const obj = { user: "Naved" };
const objList = { age: 21, gender: "Male", student: true, year: 2026 };

console.log(addProperty(obj, objList)); //{ user: 'Naved', age: 21, gender: 'Male', student: true, year: 2026 }
