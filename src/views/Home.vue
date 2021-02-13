<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Cafe App</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="auth-opt ml-auto">
        <button class="login-option btn btn-dark mr-2">
          <router-link to="/login">Login</router-link>
        </button>
        <button class="register-option btn btn-dark ">
          <router-link to="/register">Register</router-link>
        </button>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div class="auth">
    <Login></Login>
    <!-- <Regist></Regist> -->
  </div>
</div>
</template>

<script>
import Login from '../components/Login';
// import Regist from '../components/Regist.vue';
export default {
  name: "Home",
  data() {
    return {
      displayLogin: true
    }
  },
  components: {
    Login,
    // Regist
  },
  methods: {
    shuffleForm(value) {
      if (value === true) {
        this.displayLogin = false
      } else {
        this.displayLogin = true
      }
    }
  }

}
</script>

<style>
.auth-opt {
  text-decoration: none;
}
</style>