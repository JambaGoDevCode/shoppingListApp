
<template>
  <div>
    <h1>Product List</h1>
    <input type="text" name="" id="">
    <label for="">
      <input type="checkbox" name="" id="">
      Hight Product
    </label>
    <button>Save Item</button>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '../api/shop'
import store from '../../store/index'

export default {
  name: 'ProductList',
  computed: {
    products () {
      return store.getters.productsCount
    }
  },
  created () {
    shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>
