<template>
  <div>
    <Dialog
      :showDialog="showDialog"
      :value="postDialog"
      btnDialog="Yes, edit it"
      title="Bạn muốn chỉnh sửa bài viết này sao?"
      v-on:cancel-dialog="cancel"
      v-on:confirm-dialog="confirm"
      description="Bạn có chắc chắn muốn chỉnh sửa bài viết này?"
    />
    <b-button
      v-if="method === 'ADD'"
      @click="createEditPost()"
      variant="primary"
      class="btn-add"
    >
      <i class="fa fa-plus"></i> ADD
    </b-button>

    <b-button
      v-if="method === 'EDIT'"
      @click="createEditPost()"
      variant="success"
    >
      <i class="fa fa-edit"></i>
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
          <p v-if="errors.length">
            <ul>
                <li v-for="error in errors" v-bind:key="error" v-bind:todo="error" >{{ error }}</li>
            </ul>
          </p>
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
import Dialog from "../service/Dialog.vue";

export default {
  name: "CreatePost",
  props: ["post", "method", "author"],
  components: {
    Dialog,
  },
  data: function () {
    return {
      show: false,
      showDialog: false,
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
      errors: [],
      postDialog: null
    };
  },
  methods: {
    async create() {
        this.errors = [];

        if (!this.title) {
            this.errors.push("Title is required");
        }
        if (!this.content) {
            this.errors.push("Content is required");
        }
        if (this.title && this.content) {
            if (this.activeModal === "ADD") {
                await axios
                    .post("insert-post", {
                    title: this.title,
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
                    this.showDialog = true
                    this.show = false
                    this.postDialog = {
                      postID: this.postID,
                      title: this.title,
                      content: this.content,
                      status: this.status
                    }
                    
                }
        }
    },
    async createEditPost() {
      this.show = true;
      if (this.post !== undefined) {
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
    },
    cancel: function () {
      this.showDialog = false;
    },
    confirm: async function (params) {
      this.showDialog = false;
      this.updatePost(params)
    },
    updatePost: async function (params) {
      await axios
        .put(`update-post/${params.postID}`, {
            title: params.title,
            content: params.content,
            status: params.status,
        })
        .then(() => {
          this.$emit("render-posts");
        })
        .catch((err) => {
            console.log(err);
        });
    }
  },
};
</script>

<style>
.btn-add {
  position: absolute;
  right: 0;
}
</style>