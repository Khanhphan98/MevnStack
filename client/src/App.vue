<template>
  <div class="container-fluid">
    <div class="row">
      <Nav :user="user" />
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="wrapper">
              <router-view :user="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return { user: null };
  },
  async created() {
    const res = await axios.get("user");
    this.user = res.data.data;
    console.log(this.user);
  },
};
</script>

<style>
* {
  padding: none;
  border: none;
  outline: none;
}
body {
  background: #1c8ef9;
  min-height: 100vh;
  font-weight: 400;
}
.wrapper {
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 20px;
  margin-top: 100px;
  width: 550px;
}
</style>
