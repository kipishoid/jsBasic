"use strict";

const products = [{
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];
products.forEach(function (discount) {
  discount.price = discount.price - discount.price * 0.15;
});
console.log(products);

// const priceDiscount = products.map(function (discount) {
//   discount.price = discount.price - discount.price * 0.15;
// });
// console.log(products);