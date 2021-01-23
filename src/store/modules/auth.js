/* eslint-disable no-unused-vars */
import Axios from 'axios';
// import router from '../../routes'

const state = {
    users: null,
    isAuth: false
}
const getters = {
    getUsers: (state) => {
        console.log(state.users)
        return state.users
    },
    getIsAuth: (state) => {
        return state.isAuth
    },
}
const actions = {
    login({ commit }, data) {
        Axios({
            method: "POST",
            url: `${process.env.VUE_APP_API}/auth`,
            headers: {
                "content-type": "application/json",
            },
            data: data,
        })
            .then((res) => {
                // console.log(res.data.result[0].users.name_user)
                if (res.data.status == 200) {
                    commit("setUsers", res.data.result[0].users)
                    commit("setAuth")
                }
                return res
            })
            .catch((err) => {
                return err
            })
    },
    logout({ commit }) {
        commit("delUsers")
        commit("setAuth")
    },
    register({ commit }, users) {
        // eslint-disable-next-line no-unused-vars
        return new Promise((resolve, reject) => {
            Axios({
                method: "POST",
                url: `${process.env.VUE_APP_API}/user`,
                headers: {
                    "content-type": "application/json",
                },
                data: users,
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    },
}
const mutations = {
    setUsers(state, user) {
        state.users = user
    },
    setAuth(state) {
        state.isAuth = !state.isAuth
    },
    delUsers(state) {
        state.users = null
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}