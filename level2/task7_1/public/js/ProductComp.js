Vue.component('products', {
    data() {
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.imgProduct = `img/${item.id_product}.png`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },

    template: `<div class="products">
                <product v-for="item of filtered"
                :img="item.imgProduct" 
                :product="item">
                </product>
               </div>`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `
                <div class="product-item">
                    <img class="cards__img" :src="img" :alt="product.product_name">
                        <div class="product__add_button">
                            <button class="product__add__link" @click="$root.$refs.cart.addProduct(product)">
                                <img class="product__add__img" src="/img/basket_white.png" alt="basket">
                                    Add to Cart
                            </button>
                        </div>
               
                <div class="product__link">
                    <div class="product__price">
                        <p class="product__text">{{ product.product_name }}</p>
                        <p class="product__text__red">$ {{ product.price }}</p>
                    </div>
                </div>
                     </div>`
})