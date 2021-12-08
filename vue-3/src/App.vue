<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <MainScreen v-on:onStart="onStart" v-if="statusMatch" />
    <InteractScreen
      v-if="!statusMatch"
      :cardsContext="settings.cardsContext"
      @onFinish="onFinish"
    />
    <ResultScreen v-if="result" :timer="timer" @onStartAgain="startAgain()" />
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import { shuffled } from "./utils/array";
export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: true,
      result: false,
      timer: 0,
    };
  },
  methods: {
    onStart(total) {
      this.settings.totalOfBlocks = total.total;

      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      this.settings.cardsContext = shuffled(
        shuffled(shuffled(shuffled(cards)))
      );
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = false;
    },
    onFinish() {
      this.timer = new Date().getTime() - this.settings.startedAt;
      this.result = true;
    },
    startAgain() {
      this.statusMatch = true;
      this.result = false;
    },
  },
};
</script>

<style></style>
