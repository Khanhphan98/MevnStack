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
      />
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
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
  methods: {
    handleLogin() {},
  },
};
</script>
