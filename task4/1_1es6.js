'use strict';

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = Math.round(this.price *= 0.75);
    return this.price;
  }
}
const product = new Product('Слива', 99);
product.make25PercentDiscount();
console.log(product);