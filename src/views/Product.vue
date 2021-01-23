<template>
  <div class="wrapper-prod">
      <header>
          <Header/>
      </header>
      <nav>
          <Nav/>
      </nav>
      <main>
          <div class="wadah">
            <div v-for="item in getProduct" :key="item.product_id">
                <Cards 
                    :image="item.product_img" 
                    :name="item.product_name" 
                    :price="item.product_price" 
                    :product="item"
                /> 
            </div>
          </div>
      </main> 
      <aside>
            <Cart
            />
      </aside>
  </div>
</template>

<script>
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import Cards from '../components/Cards.vue';
import {mapGetters, mapActions} from 'vuex'
import Header from '../components/Header';

export default {
    name: "Product",
    components: {
        Nav,
        Cart,
        Cards,
        Header
    },
    data() {
        return {
            
        }
    },
    methods: {
        ...mapActions(["fetching"])
    },
    computed: {
        ...mapGetters(["getProduct"])
    },
    mounted() {
        this.fetching()
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