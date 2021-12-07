<template>
  <div class="notification">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      Content
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationMessage",
  computed: {},
};
</script>

<style>
.notification {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
