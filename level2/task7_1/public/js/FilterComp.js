Vue.component('my-filter', {
  data() {
    return {
      userSearch: ''
    }
  },
  template: `
            <form class="form_filter" action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">
              <input class="header__text" type="text" placeholder="Search for Item..."
                v-model="userSearch">
              <button class="header__button-search" type="submit"><img class="header__button-lens"
                src="img/search-solid.svg" alt="search">
              </button>
            </form>`
})