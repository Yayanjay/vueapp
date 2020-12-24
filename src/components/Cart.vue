<template>
  <aside class="container-cart">
    <div class="cart-header navbar-brand mb-0 h1 mt-2">
        Cart <span class="badge badge-primary">0</span>
    </div>
    <div class="cart-content">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in cart" :key="item.id">
                <button 
                @click="removeItemFromCart(item.id)"
                type="button" 
                class="close" 
                data-dismiss="modal" 
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <div class="media">
                    <img 
                    width="80px"
                    :src="item.image" 
                    class="mr-3" 
                    :alt="item.name"
                    >
                    <div class="media-body">
                        <h6 class="mt-0"><strong>{{item.name}}</strong></h6>
                        <button @click="reduceQty(item.id)" class="btn btn-sm btn-success btn-qty">-</button> 
                        X {{item.qty}}
                        <button @click="addQty(item.id)" class="btn btn-sm btn-success btn-qty">+</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="cart-footer">
      <h4>Total: Rp 30000</h4>
      <p>*harga belum termasuk ppn</p>
      <button type="button" class="btn btn-info btn-lg btn-block">Checkout</button>
      <button type="button" class="btn btn-danger btn-lg btn-block">Cancel</button>
    </div>
  </aside>
</template>

<script>
export default {
    name: "Cart"
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