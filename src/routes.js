import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Product from './views/Product';
import History from './views/History';
import User from './views/User';



Vue.use(VueRouter);

const mainRouter = new VueRouter({
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
            path: '/user',
            name: 'User',
            component: User
        }
    ]
})

export default mainRouter;