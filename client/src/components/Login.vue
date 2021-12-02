<template>
  <form @submit.prevent="handleLogin()">
    <h2>Login</h2>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Enter username"
        v-model="username"
      />
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button style="margin-right: 10px" type="submit" class="btn btn-primary">
      Login
    </button>
    <a href="register" class="btn btn-danger">SignUp</a>
  </form>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      await axios
        .post("login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
