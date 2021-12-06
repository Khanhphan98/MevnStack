<template>
  <div v-show="show" class="overlay">
    <div class="dialog">
      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title">{{ title }}</h2>
        <p class="dialog__description" v-text="description">
          {{ description }}
        </p>
      </div>

      <hr />

      <div class="dialog__footer">
        <button @click="cancel()" class="dialog__cancel">Cancel</button>
        <button @click="confirm()" class="dialog__confirm">
          Yes, delete it
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["show", "title", "description", "value"],
  methods: {
    cancel() {
      this.$emit("cancel-dialog");
      this.show = false;
    },
    confirm() {
      const params = this.value;
      this.$emit("confirm-dialog", params);
      this.show = false;
    },
  },
};
</script>
