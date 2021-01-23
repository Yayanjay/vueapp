<template>
  <aside>
    <span class="navbar-brand mb-0 h1 mt-2">
        Cart <span class="badge badge-primary">{{totalQty}}</span>
    </span>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in getCart" :key="item.product_id">
        <button 
        @click="removeItemFromCart(item.product_id)"
        type="button" 
        class="close" 
        data-dismiss="modal" 
        aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
            <img 
            width="80px"
            :src="item.product_img" 
            class="mr-3" 
            :alt="item.product_name"
            >
            <div class="media-body">
                <h6 class="mt-0"><strong>{{item.product_name}}</strong></h6>
                <p class="disabled text-right">
                <button @click="reduceQty(item.product_id)" class="btn btn-sm btn-success btn-qty">-</button> 
                X {{item.qty}}
                <button @click="addQty(item.product_id)" class="btn btn-sm btn-success btn-qty">+</button>
                    @{{item.product_price}}</p>
            </div>
        </div>
      </li>
    </ul>
    <div class="CO" v-if=" totalQty ">
      <button type="button" class="btn btn-info btn-lg btn-block " data-toggle="modal" data-target="#staticBackdrop">Checkout</button>
      <button type="button" class="btn btn-danger btn-lg btn-block">Cancel</button>
      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h3>Checkout</h3>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: "Cart",
    methods: {
        ...mapActions(["removeItemFromCart", "addQty", "reduceQty", "emptyCart"]),
        test(item) {
            console.log(item)
        }
    },
    computed: {
        ...mapGetters(["getCart"]),
        totalQty() {
        return this.getCart.reduce((a, b) => a+b.qty, 0)
      }
    }
}
</script>

<style>
aside {
  background-color: rgb(255, 246, 235);
  grid-area: aside;
  height: 100vh;
}
.btn-qty {
    border-radius: 50em;
    width: 30px;
}
.media {
    width: 90%;
    overflow: auto;
}
.media-body {
    text-align: left;
}
.cart-content {
    height: 63vh;
}
</style>