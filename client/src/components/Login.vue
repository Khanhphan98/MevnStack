<template>
    <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div class="login">
                                <form ng-dom="formLogin" data-parsley-validate>
                                    <h1>{{ msg }}</h1>
                                    <div class='form-group'>
                                        <label class="text-label" for="user">Username</label>
                                        <input type="text" v-model="username" class="form-control" placeholder="Enter user name..." >
                                    </div>
                                    <div class='form-group'>
                                        <label for="password">Password</label>
                                        <input type="password" v-model="password" class="form-control" placeholder="Enter password..." >
                                    </div>
                                    <button class="btn btn-primary">Login</button>
                                    <router-link to="/register" class="btn btn-danger">SignUp</router-link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
