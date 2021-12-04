<template>
  <form @submit.prevent="handleRegister()">
    <h2>Sign Up</h2>
    <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" v-bind:key="error" v-bind:todo="error" >{{ error }}</li>
      </ul>
    </p>
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
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      password_confirm: null,
      errors: [],
    };
  },
  methods: {
    async handleRegister() {
      this.errors = [];

      if (!this.username) {
        this.errors.push("Username is required");
      }
      if (!this.email) {
        this.errors.push("Email is required");
      }
      if (!this.password) {
        this.errors.push("Password is required");
      }
      if (!this.password_confirm) {
        this.errors.push("Password_confirm is required");
      }

      if (this.password !== this.password_confirm) {
        this.errors.push("Password does not match");
      }

      if (
        this.username &&
        this.email &&
        this.password &&
        this.password_confirm && 
        this.password === this.password_confirm
      ) {
        const res = await axios.post(`register`, {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });

        if (res.data.status) {
          this.$router.push("/login");
        }
      }
    },
  },
};
</script>
