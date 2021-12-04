<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
        <th scope="col">Author</th>
        <th scope="col">Status</th>
        <th scope="col">Method</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, post) in posts" :key="post.title">
        <th scope="row">{{ post + 1 }}</th>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
        <td>{{ value.author }}</td>
        <td>{{ configStatus(value.status) }}</td>
        <td>
          <button class="btn btn-success" style="margin-right: 5px">
            <i class="fa fa-edit"></i>
          </button>
          <button @click="deletePost(value._id)" class="btn btn-danger">
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "ListPosts",
  props: ["posts"],
  methods: {
    configStatus(status) {
      if (Number(status) === 1) {
        return "Hoạt động";
      } else {
        return "Tạm dừng";
      }
    },
    async deletePost(idPost) {
      await axios
        .delete(`remove-post/${idPost}`)
        .then((res) => {
          console.log(res);
          this.$emit("render-posts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
