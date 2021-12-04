<template>
  <div>
    <b-button
      v-if="method === 'ADD'"
      @click="createEditPost()"
      variant="primary"
    >
      ADD
    </b-button>

    <b-button
      v-if="method === 'EDIT'"
      @click="createEditPost()"
      variant="success"
    >
      EDIT
    </b-button>
    <b-modal
      v-model="show"
      :title="methodModal"
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
              <label for="status">Status</label>
              <select class="form-control" v-model="status">
                <option disabled value="">-- Select Status --</option>
                <option
                  v-for="val in stt"
                  v-bind:value="val.value"
                  :key="val.value"
                >
                  {{ val.name }}
                </option>
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
            {{ activeModal }}
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
import config from "../../service/config";

export default {
  name: "CreatePost",
  props: ["post", "method", "author"],
  data: function () {
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
      content: null,
      status: null,
      methodModal: "Create Post",
      activeModal: "ADD",
      authorID: null,
      postID: null,
      stt: config.status,
    };
  },
  methods: {
    async create() {
      if (this.activeModal === "ADD") {
        await axios
          .post("insert-post", {
            title: this.title,
            author: this.authorID,
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
      } else {
        await axios
          .put(`update-post/${this.postID}`, {
            title: this.title,
            author: this.authorID,
            content: this.content,
            status: this.status,
          })
          .then((res) => {
            this.show = false;
            console.log(res);
            this.$emit("render-posts");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    async createEditPost() {
      this.show = true;
      if (this.post !== undefined) {
        console.log(this.post);
        this.title = this.post.title;
        this.content = this.post.content;
        this.status = this.post.status;
        this.postID = this.post._id;
        this.methodModal = "Edit Post";
        this.activeModal = "EDIT";
      } else {
        this.methodModal = "Create Post";
        this.activeModal = "ADD";
        this.title = "";
        this.content = "";
        this.status = "";
      }
      this.authorID = this.author._id;
    },
  },
};
</script>
