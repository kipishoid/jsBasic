const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._getProduct()
            .then(data => {
                this.goods = data;
                this.render()
            });
    }

    _getProduct() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
    totalPrice() {
        return this.goods.reduce((sum, {
            price
        }) => sum + price, 0);

    }
}

/**
 * @param {string} this.addProduct добавить товар в корзину
 * @param {string} this.removeProduct удалить товар из корзины
 * @param {string} this.changeQuantityProduct изменить количество товаров
 * @param {string} this.emptyTheTrash очистить корзину
 * @param {string} this.openTheCart открыть корзину
 */

class ProductItem {
    constructor(product, img = 'images/1.jpg') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    /**
     * @param {Object} product-item объект из массива this.goods
     * @param {string} this.title название продукта
     * @param {string} this.price цена продукта
     * @param {string} this.img путь до картинки товара
     */
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductList();

class basket {
    constructor(container = '.basket_modal') {
        this.container = container;
        this.goods = []; //массив товаров
        this._clickBasket();
        this._getBasket()
            .then(data => { //data - объект js
                this.goods = data.contents;
                this.render()
            });
    }

    _getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new BasketItem();
            block.insertAdjacentHTML('beforeend', item.render(product));
        }
    }

    _clickBasket() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

    _removeBasketProduct() {
        document.querySelector(".btn_delete").addEventListener('click', () => {
            document.querySelector(this.container).removeClass('invisible');
        });
    }
}

class BasketItem {

    render(product) {
        return `<div class="basket_cart" data-id="${product.id_product}">
                <img class="basket_img" src="${product.img}" alt="basket image">
                <p class="product_title">${product.product_name}</p>
                <p class="product_quantity">Кол-во: ${product.quantity}</p>
                <p class="product_price">$${product.price}</p>
                <p class="product__sum_price">$${product.quantity * product.price}</p>
                <button class="btn_delete" data-id="${product.id_product}">&times;</button>
                </div>`
    }
}

let bask = new basket();