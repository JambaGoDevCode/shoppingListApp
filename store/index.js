/* eslint-disable no-new */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // = data
    product: []
  },
  getters: {
    // computed properties
    productsCount (state, getters) {
      return state.product.filter(product => product.inventory > 0)
    }
  },
  actions: {
    // methods
    // make call api
    // run setProducts mutation
    fetchProducts () {
    }
  },
  mutations: {
    // set and update the state
    setProducts (state, products) {
      state.product = products
    }
  }
})
