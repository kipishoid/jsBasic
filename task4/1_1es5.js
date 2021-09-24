"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
  this.price = Math.round(this.price *= 0.75);
  return this.price;
};
const product = new Product('Слива', 99);
product.make25PercentDiscount();

console.log(product);