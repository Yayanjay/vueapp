
const state = {
    cart : []
}
const getters = {
    getCart: (state) => {
        return state.cart
    },
    calculate: (state) => {
        let price = 0
        for (const key in state.cart) {
            price = price + state.cart[key].product.price * state.cart[key].qty
        }
        return price
    },
    quantity: (state) => {
        let qty = 0 
        for (const key in state.cart) {
            qty = qty + state.cart[key].qty
        }
        return qty
    }
}
const actions = {

    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },
    removeItemFromCart({ commit }, id) {
      commit("removeFromCart", id);
    },
    addQty({ commit }, id) {
      commit("addQty", id);
    },
    reduceQty({ commit }, id) {
      commit("reduceQty", id);
    },
    emptyCart({ commit }) {
      commit("emptyCart");
    }
}
const mutations = {

    addItemToCart(state, item) {
      const productInCart = state.cart.find(data => data.product_id === item.product_id)
      if (!productInCart) {
        state.cart.push({ ...item, qty: 1 });
      } else {
        productInCart.qty++;
      }
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.product_id !== id);
    },
    addQty(state, id) {
      const productInCart = state.cart.find((data) => data.product_id === id);
      productInCart.qty++;
    },
    reduceQty(state, id) {
      const productInCart = state.cart.find((data) => data.product_id === id);
      if (productInCart.qty > 1) {
        productInCart.qty--;
      } else {
        state.cart.splice(state.cart.indexOf(productInCart, 1));
      }
    },
    emptyCart(state) {
      state.cart = []
    }
    
}

export default {
    state,
    getters,
    actions,
    mutations
}