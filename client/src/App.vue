<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="wrapper">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background: #1c8ef9;
  min-height: 100vh;
  font-weight: 400;
}
.wrapper {
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 20px;
  margin-top: 100px;
  width: 550px;
}
</style>
