<template>
  <div>
    <div class="wrap-header">
      <h3>Posts</h3>
      <CreatePosts />
    </div>
    <ListPosts :posts="posts" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import ListPosts from "./posts/listPosts.vue";
import CreatePosts from "./posts/createPost.vue";

export default {
  name: "Posts",
  components: {
    ListPosts,
    CreatePosts,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    configStatus(status) {
      if (Number(status) === 1) {
        return "Hoạt động";
      } else {
        return "Tạm dừng";
      }
    },
  },
  async created() {
    await axios
      .get("/posts")
      .then((res) => {
        this.posts = res.data.post;
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
