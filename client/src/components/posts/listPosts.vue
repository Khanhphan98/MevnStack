<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
        <th scope="col">Author</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, post) in posts" :key="post.title">
        <th scope="row">{{ post + 1 }}</th>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
        <td>{{ value.author }}</td>
        <td>{{ configStatus(value.status) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
  },
};
</script>
