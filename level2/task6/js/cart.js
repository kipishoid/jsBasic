Vue.component('cart__block', {
  props: ['cartItems', 'img', 'visibility'],
  template: `
          <div class="cart__block" v-show="visibility">
          <cart-item v-for="item of cartItems" :img="img" :cart-item="item"></cart-item>
          </div>
          `
});

Vue.component('cart-item', {
  props: ['img', 'cartItem'],
  template: `
          <div class="cart-item">
            <img class="basket_img" :src="img" alt="basket image">
            <p class="product_title">{{ cartItem.product_name }}</p>
            <p class="product_quantity">Кол-во: {{ cartItem.quantity }}</p>
            <p class="product_price">$ {{ cartItem.price }}</p>
            <p class="product__sum_price">$ {{cartItem.quantity*cartItem.price}}</p>
            <button class="btn_delete" @click="$parent.$emit('remove', cartItem)">&times;</button>
          </div>
          `
})