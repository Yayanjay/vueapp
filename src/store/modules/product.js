import axios from 'axios'

const state = {
    product : null
}

const getters = {
    getProduct: (state) => {
        return state.product
    }
}
const actions = {
    fetching({commit}) {
        axios.get('http://localhost:3000/api/product')
            .then((res) => {
                commit("setProduct", res.data.result)
            }).catch((err) => {
                console.log(err)
            })
    }
}
const mutations = {
    setProduct(state, prod) {
        state.product = prod
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}