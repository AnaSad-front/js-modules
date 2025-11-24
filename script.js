// importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("apple", 4);
// addToCart("pizza", 2);
// console.log(price, tq);

console.log("Importing module");
// console.log(shoppingCost); // This will cause an error because shoppingCost is not exported

// import * as ShoppingCart from "./shoppingCart.js"; // Importing everything from the module
// ShoppingCart.addToCart("banana", 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
import add, { cart } from "./shoppingCart.js"; // Importing the default export
add("orange", 3);
add("grape", 7);
add("mango", 1);

console.log(cart);
