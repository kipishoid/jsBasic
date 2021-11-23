Vue.component('cart', {
  data() {
    return {
      showCart: false,
      cartItems: [],
    }
  },
  methods: {
    addProduct(product) {
      let find = this.cartItems.find(el => el.id_product === product.id_product);
      if (find) {
        this.$parent.putJson(`/api/cart/${ product.id_product }/${ product.product_name }`, {
            quantity: 1
          })
          .then(data => {
            if (data.result) {
              find.quantity++;
            }
          })
      } else {
        let prod = Object.assign({
          quantity: 1
        }, product);
        this.$parent.postJson(`api/cart/${ product.id_product }/${ product.product_name }`, prod)
          .then(data => {
            if (data.result) {
              this.cartItems.push(prod);
            }
          })
      }
    },
    remove(product) {
      if (product.quantity > 1) {
        this.$parent.putJson(`/api/cart/${ product.id_product }/${ product.product_name }`, {
            quantity: -1
          })
          .then(data => {
            if (data.result) {
              product.quantity--;
            }
          })
      } else {
        this.$parent.delJson(`/api/cart/${ product.id_product }/${ product.product_name }`, product)
          .then(data => {
            if (data.result) {
              this.cartItems.splice(this.cartItems.indexOf(product), 1);
            } else {
              console.log('error');
            }
          })
      }
    },
  },
  mounted() {
    this.$parent.getJson(`/api/cart`)
      .then(data => {
        for (let el of data.contents) {
          // item.imgProduct = `images/${item.id_product}.jpeg`;
          this.cartItems.push(el)
        }
      });
  },
  template: `<div>
          <button class="cart__btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
          <div class="cart__block" v-show="showCart">
          <p v-if="!cartItems.length">В корзине нет товаров</p>
          <cart-item v-for="item of cartItems" :img="item.imgProduct" :cart-item="item" @remove="remove"></cart-item>
          </div>
          </div>
          `
});

Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `
          <div class="cart-item">
            <img class="basket_img" :src="img" alt="basket image">
            <p class="product_title">{{ cartItem.product_name }}</p>
            <p class="product_quantity">Кол-во: {{ cartItem.quantity }}</p>
            <p class="product_price">$ {{ cartItem.price }}</p>
            <p class="product__sum_price">$ {{cartItem.quantity*cartItem.price}}</p>
            <button class="btn_delete" @click="$emit('remove', cartItem)">&times;</button>
          </div>
          `
})