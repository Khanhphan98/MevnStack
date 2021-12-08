<template>
  <div class="screen">
    <h1>Interact Screen here...</h1>
    <card-flip
      v-for="(card, index) in cardsContext"
      :key="index"
      :image="`images/${card}.png`"
      :card="{ index, value: card }"
      :ref="`card-${index}`"
      @onFlip="checkRule($event)"
    ></card-flip>
  </div>
</template>

<script>
import CardFlip from "./Card.vue";
export default {
  name: "InteractScreen",
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardFlip,
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        this.$refs[`card-${this.rules[0].index}`].onDisableCard();
        this.$refs[`card-${this.rules[1].index}`].onDisableCard();
        this.rules = [];

        const disableElement = document.querySelectorAll(
          ".screen .card.disabled"
        );
        if (
          disableElement &&
          disableElement.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 800);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
          this.rules = [];
        }, 500);
      } else return false;
    },
  },
};
</script>
