<template>
  <div class="screen">
    <h1>Vitoria</h1>
    <p>{{ convertTimer(timer) }} second</p>
    <button @click="onStartAgain()">Start Again</button>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
  methods: {
    convertTimer(millisecond) {
      var minutes = Math.floor(millisecond / 60000);
      var seconds = ((millisecond % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },
    onStartAgain() {
      this.$emit("onStartAgain");
    },
  },
};
</script>
