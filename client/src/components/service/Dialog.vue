<template>
  <div v-show="showDialog" class="overlay">
    <div class="dialog">
      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title">{{ title }}</h2>
        <p class="dialog__description" v-text="description">
          {{ description }}
        </p>
      </div>

      <hr />

      <div class="dialog__footer">
        <button @click="cancel(false)" class="dialog__cancel">Cancel</button>
        <button @click="confirm(false)" class="dialog__confirm">
          {{ btnDialog }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["showDialog", "title", "description", "value", "btnDialog"],
  methods: {
    cancel() {
      this.$emit("cancel-dialog");
    },
    confirm() {
      const params = this.value;
      params !== null
        ? this.$emit("confirm-dialog", params)
        : this.$emit("confirm-dialog");
    },
  },
};
</script>
