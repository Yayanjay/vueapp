import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Product from './views/Product';
import History from './views/History';
import Login from './views/Login';
import Register from './views/Register';



Vue.use(VueRouter);

const mainRouter = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home 
        },
        {
            path: '/product',
            name: 'Product',
            component: Product 
        },
        {
            path: '/history',
            name: 'History',
            component: History 
        },
        {
            path: '/login',
            name: 'Login',
            component: Login 
        },
        {
            path: '/register',
            name: 'Register',
            component: Register 
        }
    ]
})

export default mainRouter;