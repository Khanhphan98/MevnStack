<template>
  <div>
    <Dialog
      :show="showDialog"
      :value="idPost"
      title="Delete posts?"
      v-on:cancel-dialog="cancel()"
      v-on:confirm-dialog="confirm(value)"
      description="Are you sure want to delete this post?"
    />
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
import config from "../service/config";
import Dialog from "../components/Dialog.vue";

export default {
  name: "Posts",
  props: ["user"],
  components: {
    CreatePosts,
    Dialog,
  },
  data() {
    return {
      posts: [],
      status: config.status,
      showDialog: false,
      idPost: null,
    };
  },
  mounted: function () {
    this.renderPost();
  },
  watch: {
    renderPost: () => {
      this.renderPost();
    },
  },
  methods: {
    cancel() {},
    async confirm(params) {
      console.log(params);
      // await axios
      //   .delete(`remove-post/${idPost}`)
      //   .then((res) => {
      //     if (res.data.status) {
      //       this.renderPost();
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    configStatus(status) {
      if (Number(status) === config.status[1].value) {
        return config.status[1].name;
      } else {
        return config.status[0].name;
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
    deletePost(idPost) {
      this.showDialog = true;
      this.idPost = idPost;
    },
  },
};
</script>

<style>
/* .wrap-header {
  display: flex;
  position: relative;
}
.wrap-header button {
  position: absolute;
  right: 0;
} */
</style>
