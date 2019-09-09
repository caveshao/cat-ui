<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ca-color-picker :color="color"></ca-color-picker>
    <ca-button
      type="primary"
      size="medium"
      round
      disabled
    ></ca-button>
    <ca-alert
      title="good"
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
        color: "yellow"
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
