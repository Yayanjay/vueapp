<template>
  <div class="home">
      <button class="btn btn-info  ">
          <router-link to="/product" class="text-decoration-none">Let's buy something</router-link>
      </button>
      <button class="btn btn-danger  ">
          <router-link to="/user" class="text-decoration-none">Login</router-link>
      </button>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>

</style>