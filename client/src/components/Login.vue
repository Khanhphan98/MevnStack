<template>
  <div class="login">
      <h1>Login</h1>
      <form action="">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" name="username" class="form-control" 
            :class="{ 'is-invalid': submitted && !username }">
          <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" v-model="password" name="password" class="form-control" 
            :class="{ 'is-invalid': submitted && !password }">
          <div v-show="submitted && !password" class="invalid-feedback">Username is required</div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>

<style>

</style>