<template>
  <div>
    <div v-if="user">
      <h3>Hi, {{ user.username }}</h3>
      <span>Email: {{ user.email }}</span>
    </div>
    <div v-else>
      <h3>Hello, You have not logged!</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: ["user"],
};
</script>
