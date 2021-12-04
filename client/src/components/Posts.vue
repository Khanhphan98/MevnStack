<template>
  <div>
    <div class="wrap-header">
      <h3>Posts</h3>
      <CreatePosts
        :method="'ADD'"
        :author="user"
        v-on:render-posts="renderPost()"
      />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Status</th>
          <th scope="col">Method</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, post) in posts" :key="post.title">
          <th scope="row">{{ post + 1 }}</th>
          <td>{{ value.title }}</td>
          <td>{{ value.content }}</td>
          <td>{{ configStatus(value.status) }}</td>
          <td style="display: flex">
            <CreatePosts
              :author="user"
              :post="value"
              :method="'EDIT'"
              v-on:render-posts="renderPost()"
            />
            <button
              @click="deletePost(value._id)"
              style="margin-left: 5px"
              class="btn btn-danger"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import CreatePosts from "./posts/createPost.vue";

export default {
  name: "Posts",
  props: ["user"],
  components: {
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
    async renderPost() {
      await axios
        .get("/posts")
        .then((res) => {
          this.posts = res.data.post;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deletePost(idPost) {
      await axios
        .delete(`remove-post/${idPost}`)
        .then((res) => {
          if (res.data.status) {
            this.renderPost();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    this.renderPost();
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
