class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
        this.totalPrice();
    }
    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50
            },
        ]
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
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

/**
 * @param {string} this.addProduct добавить товар в корзину
 * @param {string} this.removeProduct удалить товар из корзины
 * @param {string} this.changeQuantityProduct изменить количество товаров
 * @param {string} this.emptyTheTrash очистить корзину
 * @param {string} this.openTheCart открыть корзину
 */
class CartItem {
    constructor() {
        this.addProduct
        this.removeProduct
        this.changeQuantityProduct
        this.emptyTheTrash
        this.openTheCart
    }
}

class ProductItem {
    constructor(product, img = 'images/1.jpg') {
        this.title = product.title;
        this.id = product.id;
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
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();