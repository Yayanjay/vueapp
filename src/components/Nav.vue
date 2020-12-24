<template>
  <nav>
      <ul class="nav flex-column">
        <router-link to="/" type="button" class="btn btn-nav mt-3" >
            <img src="https://user-images.githubusercontent.com/34501764/102010531-34b7ed80-3d71-11eb-8ede-83b1733cd6ab.png" width="25px" alt="">
        </router-link>
        <router-link to="/product" type="button" class="btn btn-nav mt-3" >
            <img src="https://user-images.githubusercontent.com/34501764/101978426-73717900-3c87-11eb-9d30-967419a24ffe.png" width="25px" alt="">
        </router-link>
        <router-link to="/history" type="button" class="btn btn-nav mt-3" >
            <img src="https://user-images.githubusercontent.com/34501764/101978434-75d3d300-3c87-11eb-9128-cdc33f2b8ed5.png" width="25px" alt="">
        </router-link>
        <button type="button" class="btn btn-nav mt-3" data-toggle="modal" data-target="#exampleModal" >
            <img src="https://user-images.githubusercontent.com/34501764/101978431-753b3c80-3c87-11eb-9b95-c518760ae84c.png" width="25px" alt="">
        </button>
       
        <!-- Modal -->
        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Menu</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="text-left">
                  <div class="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="insert menu's name" v-model="newProduct">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Price</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="insert menu's price" v-model="newPrice">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Image Url</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="insert menu's url" v-model="newImage">
                  </div>
                  <div class="form-group">
                    <label for="formGroupExampleInput2">Category</label>
                    <select class="custom-select">
                      <option selected>Choose category</option>
                      <option value="1">Food</option>
                      <option value="2">Beverage</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Add Product</button>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </nav>
</template>

<script>
// import Axios from 'axios'
export default {
    name: "Nav",
    data() {
      return {
        newProduct: '',
        newprice: null,
        newimage: '',

      }
    },
    // methods() {
    //   addProduct() {
    //     Axios.post('localhost:3000/product',)
    //   }
    // }
}
</script>

<style>

</style>