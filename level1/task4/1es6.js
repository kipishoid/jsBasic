'use strict';

class Product1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  make25PercentDiscount() {
    this.price = Math.round(this.price *= 0.75);
    return this.price;
  }
}
const product1 = new Product1('Вишня', 144);
product1.make25PercentDiscount();
console.log(product1);