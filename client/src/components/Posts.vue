<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <div>
      <input type="text" v-model="inputText">
      <span>Input: {{ inputText }}</span>
    </div>
    <p>Animal:
      <span v-for="animal in animals">
          {{ animal }}
      </span>
    </p>
    <p>
      Current status: {{ statusFromId(status) }}
    </p>
    <div>
      Filter number: <li v-for="number in filterNumber(numbers)">{{ number }}</li>
    </div>
    <div>
      Computed Properties: {{ numberTotal }}
    </div>
    <p :data-alt="name | capitalize('!')">{{ name | capitalize('!') }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        inputText: 'initial value',
        animals: ['dog', 'cat', 'rabbit'],
        status: 1,
        numbers: [1, 3, 6, 8, 12, 15, 16],
        name: 'foo'
      }
    },
    methods: {
      statusFromId(id) {
        const status = ({
          0: 'Sleep',
          1: 'Eating',
          2: 'Do'
        })[id];
        return status || `Unknow status ${id}`;
      },
      filterNumber(numbers) {
        return numbers.filter(number => number % 2 === 0)
      }
    },
    computed: {
      numberTotal() {
        return this.filterNumber(this.numbers).reduce((sum, val) => sum +val);
      }
    },
    watch: {
      'inputText'(newVal, oldVal) {
      }
    },
    filters: {
      capitalize (value, char) {
        if (!value) return '';
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1) + char;
      }
    }
  }
</script>
