// exporting module
console.log("exporting module");

const shoppingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product}(s) added to cart. Total cost: $${
      quantity * shoppingCost
    }`
  );
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `Default export: ${quantity} ${product}(s) added to cart. Total cost: $${
      quantity * shoppingCost
    }`
  );
}
