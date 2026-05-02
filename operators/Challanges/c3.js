//on a login page, verify user's credentials
//check if username is not empty AND password is not empty
//if either is empty, display "Both fields are required!"

const username = "Naved";
const password = "Password";
const validity = username && password ? "Works" : "Both fields are required!"; 
console.log(validity);
