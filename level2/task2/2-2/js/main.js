'use strict';
class Hamburger {
    constructor()

    class ProductList {
        constructor(container = '.burgers') {
            this.container = container;
            this.hamburger = [];
            this.toppings = [];
            this.seasoning = [];
            this._fetchProducts();
            this.render(); //вывод товаров на страницу
            this.totalPrice();
        }
        _fetchProducts() {
            this.hamburger = [{
                    id: 1,
                    size: 'small',
                    price: 50,
                    ccal: 20
                },
                {
                    id: 2,
                    size: 'big',
                    price: 100,
                    ccal: 40
                }
            ];
            this.toppings = [{
                    id: 3,
                    title: 'С сыром',
                    price: 0,
                    ccal: 20
                },
                {
                    id: 4,
                    title: 'С салатом',
                    price: 0,
                    ccal: 5
                },
                {
                    id: 5,
                    title: 'С картофелем',
                    price: 0,
                    ccal: 10
                },
            ];
            this.seasoning = [{
                    id: 6,
                    title: 'посыпать приправой',
                    price: 0,
                    ccal: 0
                },
                {
                    id: 7,
                    title: 'Полить майонезом',
                    price: 0,
                    ccal: 5
                },
            ];
        }

        render() {
            const block = document.querySelector(this.container);
            for (let product of this.hamburger) {
                const item = new ProductItem(product);
                block.insertAdjacentHTML("beforeend", item.render());
            }
            const block_sum = document.querySelector('.sum');
            block_sum.insertAdjacentText("beforeend", this.totalPrice());
        }
        totalPrice() {
            return this.goods.reduce((sum, {
                price
            }) => sum + price, 0);

        }
    }



    class ProductItem {
        constructor(product) {
            this.title = product.title;
            this.id = product.id;
            this.price = product.price;
        }
        /**
         * @param {Object} product-item объект из массива this.goods
         * @param {string} this.title название продукта
         * @param {string} this.price цена продукта
         */
        render() {
            return `<div class="product-item">
                <h3></h3>
                <p></p>
            </div>`
        }
    }

    let list = new ProductList();