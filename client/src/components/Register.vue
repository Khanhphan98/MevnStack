<template>
  <form @submit.prevent="handleRegister()">
    <h2>Sign Up</h2>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="user name..."
        v-model="username"
      />
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        class="form-control"
        placeholder="email..."
        v-model="email"
      />
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="password">Password</label>
      <input
        class="form-control"
        type="password"
        id="password"
        placeholder="enter password..."
        v-model="password"
      />
    </div>
    <div class="form-group" style="margin-bottom: 10px">
      <label for="password">Confirm Password</label>
      <input
        class="form-control"
        type="password"
        id="password_confirm"
        placeholder="confirm password..."
        v-model="password_confirm"
      />
    </div>
    <button type="submit" style="margin-right: 10px" class="btn btn-danger">
      SignUp
    </button>
    <a href="/login" class="btn btn-primary">Login</a>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    handleRegister() {
      var data = {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      };
      console.log(data);
    },
  },
};
</script>
