<template>
    <div class="Register-container">
        <div class="Register-login-from">
            <div class="Register-img-container">
                <div class="register-section">
                    <div class="logo-putih">
                        <img src="../assets/pic.jpg" alt="" class="logo-regis" />
                    </div>
                </div>
                <img src="../assets/pic.jpg" alt="hero-img" />
            </div>
            <div class="Register-input-container">
                <div class="Register-text-explain">
                    <h2>Register Form</h2>
                    <h3>Data in this form will be use to login</h3>
                </div>
                <div class="register-input">
                    <div class="register-inp">
                        <input
                            type="text"
                            name="name"
                            @blur="onBlur"
                            @focus="onFocus"
                            v-model="name"
                        />
                        <span data-placeholder="Name" />
                    </div>
                    <div class="register-inp">
                        <input
                            type="text"
                            name="username"
                            @blur="onBlur"
                            @focus="onFocus"
                            v-model="username"
                        />
                        <span data-placeholder="Username" />
                    </div>
                    <div class="register-inp">
                        <input
                            type="email"
                            name="email"
                            @blur="onBlur"
                            @focus="onFocus"
                            v-model="email"
                        />
                        <span data-placeholder="Email" />
                    </div>
                    <div class="register-inp">
                        <input
                            type="password"
                            name="password"
                            @blur="onBlur"
                            @focus="onFocus"
                            v-model="password"
                        />
                        <span data-placeholder="Password" />
                    </div>
                </div>
                <div class="Register-btn-save">
                    <div class="botom-txt">
                        <p>Have account? <router-link to="/login">Login here!</router-link></p>
                    </div>
                    <button @click="daftar">Daftar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: "Register",
    data() {
        return {
            name: "",
            username: "",
            email: "",
            password: "",
            role: "user",
        }
    },
    methods: {
        onFocus(event) {
            event.target.classList.add("focus")
        },
        onBlur(event) {
            if (event.target.value === "") {
                event.target.classList.remove("focus")
            }
        },
        daftar() {
            try {
                axios({
                    method: "POST",
                    url: "http://localhost:9000/users",
                    headers: {
                        "content-type": "application/json",
                    },
                    data: {
                        role: this.role,
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        password: this.password,
                    },
                })
                    .then((res) => {
                        if (res.data.status == 200) {
                            this.$router.push({ name: "login" })
                        }
                    })
                    .catch(() => {})
            } catch (error) {
                alert(error)
            }
        },
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    /* font-family: 'Poppins', sans-serif; */
    font-family: "Montserrat", sans-serif;
}
</style>