<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" v-if="!user">
        <li class="nav-item">
          <router-link class="nav-link" to="login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="register">Register</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto" v-if="user">
        <li class="nav-item">
          <router-link to="posts" class="nav-link">Posts</router-link>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0)" @click="handleLogout" class="nav-link"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: ["user"],
  methods: {
    handleLogout() {
      document.cookie = "token=;";
      window.location.href = "/login";
    },
  },
};
</script>
