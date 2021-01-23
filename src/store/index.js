import Vue from 'vue'
import Vuex from 'vuex'

import Product from './modules/product'
import Cart from './modules/cart'
import Auth from './modules/auth'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        Product,
        Cart,
        Auth
    }
})