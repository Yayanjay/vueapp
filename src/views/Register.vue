<template>
    <div class="container">
        <div class="login-from">
            <h1 class="text-info">Register Form</h1>

            <div class="inpform">
                <input type="text" @blur="onBlur" @focus="onFocus" v-model="user_name" />
                <span data-placeholder="username"></span>
            </div>

            <div class="inpform">
                <input type="text" @blur="onBlur" @focus="onFocus" v-model="user_email" />
                <span data-placeholder="Email"></span>
            </div>

            <div class="inpform">
                <input type="password" @focus="onFocus" @blur="onBlur" v-model="user_pass" />
                <span data-placeholder="Password"></span>
            </div>

            <input type="submit" class="login-btn" value="Sign In" @click="register" />

            <div class="botom-txt">
                <p>Already have an account? <router-link to="/login">Sign in!</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user_name: "",
            user_email: "",
            user_pass: "",
            user_role: "user",
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
        register: function () {
            let data = {
            name: this.name,
            email: this.email,
            password: this.password,
            is_admin: this.is_admin
            }
            this.$store.dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
        }
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
.container {
    min-height: 100vh;
    background-image: url("../assets/bg-cafe.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
}
.login-from {
    width: 360px;
    /* background: rgba(236, 240, 241, 0.9); */
    height: 480px;
    padding: 50px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    box-shadow: 0px 0px 20px -9px #000000;
    transform: translate(-50%, -50%);
    background: rgba(236, 240, 241, 0.9);
    border: 2px solid #333;
}
.login-from h1 {
    text-align: center;
    margin-bottom: 60px;
    font-size: 20pt;
}
.inpform {
    border-bottom: 2px solid #dadada;
    position: relative;
    margin: 30px 0;
}
.inpform input {
    font-size: 15px;
    width: 100%;
    color: #333;
    border: none;
    background: none;
    outline: none;
    padding: 0 5px;
    height: 40px;
}
.inpform span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    z-index: -1;
    transition: 0.5s;
}
.inpform span::after {
    content: "";
    position: absolute;
    bottom: -5%;
    left: 0px;
    width: 0%;
    height: 2px;
    background-image: linear-gradient(120deg, #07038c, #2980b9);
    transition: 0.5s;
}
.focus + span::before {
    top: -10px;
    font-size: 9pt;
}
.focus + span::after {
    width: 100%;
}
.login-btn {
    display: block;
    margin: 20px 0;
    width: 100%;
    height: 40px;
    border: none;
    background-size: 200%;
    cursor: pointer;
    background-image: linear-gradient(120deg, #07038c, #2980b9);
    color: #fff;
    transition: 0.5s;
    border-radius: 2em;
}
.login-btn:hover {
    background-position: right;
}
.botom-txt {
    text-align: center;
    font-size: 13px;
    color: #9e9e9e;
}
</style>