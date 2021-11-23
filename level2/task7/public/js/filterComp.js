Vue.component('my-filter', {
  data() {
    return {
      userSearch: ''
    }
  },
  template: `
        <form action="#" class="cart__form_search" @submit.prevent="$parent.$refs.products.filter(userSearch)">
          <input type="text" class="cart__form_search_input" v-model="userSearch">
          <button class="cart__btn-searth" type="button">Поиск</button>
        </form>
  `
})