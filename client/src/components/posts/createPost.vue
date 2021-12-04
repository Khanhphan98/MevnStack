<template>
  <div>
    <b-button @click="show = true" variant="primary"
      ><i class="fa fa-plus-circle"></i> ADD</b-button
    >

    <b-modal
      v-model="show"
      title="Create Post"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <b-container fluid>
        <b-row>
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter title"
                v-model="title"
              />
            </div>
            <div class="form-group">
              <label for="content">Content</label>
              <input
                type="text"
                class="form-control"
                id="content"
                placeholder="Enter content"
                v-model="content"
              />
            </div>

            <div class="form-group">
              <label for="author">Author</label>
              <input
                type="text"
                class="form-control"
                id="author"
                placeholder="Enter author"
                v-model="author"
              />
            </div>

            <div class="form-group">
              <label for="status">Status</label>
              <select class="form-control" id="status" v-model="status">
                <option>-- Select option --</option>
                <option value="1">Hoạt động</option>
                <option value="0">Tạm dừng</option>
              </select>
            </div>
          </form>
        </b-row>
      </b-container>

      <template #modal-footer>
        <div class="w-100">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="create()"
            style="margin-right: 5px"
          >
            Create
          </b-button>
          <b-button
            variant="danger"
            size="sm"
            class="float-right"
            @click="show = false"
          >
            Close
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      show: false,
      variants: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "info",
        "light",
        "dark",
      ],
      headerBgVariant: "dark",
      headerTextVariant: "light",
      bodyBgVariant: "light",
      bodyTextVariant: "dark",
      footerBgVariant: "warning",
      footerTextVariant: "dark",
      title: null,
      author: null,
      content: null,
      status: null,
    };
  },
  methods: {
    async create() {
      await axios
        .post("insert-post", {
          title: this.title,
          author: this.author,
          content: this.content,
          status: this.status,
        })
        .then(() => {
          this.show = false;
          this.$emit("render-posts");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
