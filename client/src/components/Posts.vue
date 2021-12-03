<template>
  <div>
    <div class="wrap-header">
      <h3>Posts</h3>
      <button class="btn btn-primary">
        <i class="fa fa-plus-circle"></i> ADD
      </button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "Posts",
  data() {
    return {};
  },
  async listPost() {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.wrap-header {
  display: flex;
  position: relative;
}
.wrap-header button {
  position: absolute;
  right: 0;
}
</style>
