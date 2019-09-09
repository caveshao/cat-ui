<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ca-color-picker :color="color +'test'"></ca-color-picker>
    <!--只有 v-bind 可以应用动态的值绑定-->
    <el-row>
      <el-button
        :type="pri"
        round
      >主要按钮</el-button>
    </el-row>
    <ca-button
      :type="pri"
      size="small"
      round
      disabled
    >123</ca-button>
    <ca-alert
      title="成功"
      type="success"
    ></ca-alert>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "app",
    components: {
      HelloWorld
    },
    data() {
      return {
        color: "yellow",
        pri: "primary"
      };
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
