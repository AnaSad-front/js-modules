// importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// addToCart("apple", 4);
// addToCart("pizza", 2);
// console.log(price, tq);

// console.log("Importing module");
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

/*
// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost(); // top-level await
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product}(s) added to cart. Total cost: $${
        quantity * shoppingCost
      }`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product}(s) ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("kiwi", 4);
ShoppingCart2.addToCart("pear", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shoppingCost); // undefined
*/

/*
// CommonJS Module (used in Node.js - not in browsers)
// export
export.addToCart=function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product}(s) added to cart. Total cost: $${
        quantity * shoppingCost
      }`
    )}

// import
const {addToCart}=require('./shoppingCart.js')
*/

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// Hot Module Replacement (HMR) - for development purposes
if (module.hot) {
  module.hot.accept();
}
