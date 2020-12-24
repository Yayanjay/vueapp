<template>
  <div class="wrapper-prod">
      <header class="navbar navbar-light bg-light">
        <a class="navbar-brand">Product</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="type here..." aria-label="Search" >
            <button 
            @click="isHidden = true"
            class="btn btn-outline-success my-2 my-sm-0" 
            type="submit"><img 
            src="https://user-images.githubusercontent.com/34501764/101978430-753b3c80-3c87-11eb-8d47-5d36618c1665.png" 
            width="20px" height="20px"
            alt="">
            </button>
        </form>
      </header>
      <nav>
          <Nav/>
      </nav>
      <main>
          <div class="wadah">
            <div v-for="item in datas" :key="item.product_id">
                <Cards :image="item.product_img" :name="item.product_name" :price="item.product_price" /> 
            </div>
          </div>
      </main> 
      <aside>
            <Cart />
      </aside>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import axios from 'axios';
import Cards from '../components/Cards.vue';

export default {
    name: "Product",
    components: {
        Nav,
        Cart,
        Cards
    },
    data() {
        return {
            datas: null
        }
    },
    mounted() {
        axios.get('http://localhost:3000/product')
            .then((res) => {
                this.datas = res.data.result
                console.log(res.data.result)
            }).catch((err) => {
                console.log(err)
            });
    }
}
</script>

<style>
.wrapper-prod {
    display: grid;
        height: 100vh;
        grid-template-columns: 0.2fr 2fr 0.8fr;
        grid-template-rows: 0.1fr 2fr;
        grid-template-areas:
          "nav header aside"
          "nav main aside";
        grid-gap: 0.5em;
}
header {
    grid-area: header;
    background-color: rgb(255, 246, 235);
}
nav {
    grid-area: nav;
    background-color: rgb(255, 246, 235);
}
main {
    grid-area: main;
    background-color: rgb(255, 246, 235);
    overflow: auto;
    height: 89vh;
}
aside {
    grid-area: aside;
    background-color: rgb(255, 246, 235);
}
</style>