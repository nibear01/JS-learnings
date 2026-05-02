// calcute total cost by giving 10% discount
let price = 150;
let quantity = 3;

const total_cost = price * quantity;
const discount = total_cost * 0.10;
const discountPrice = total_cost - discount;

console.log(`Total Price: ${total_cost}`);  //'Total Price: 450'
console.log(`Discounted Price is ${discountPrice}`); //'Discounted Price is 405'



