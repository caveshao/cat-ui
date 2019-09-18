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
    <ca-button-group>
      <ca-button
        :type="pri"
        @click="handleClick"
        size="success"
        round
        plain
      >123此处的文字必须有相应的插槽才能显示</ca-button>

      <ca-button
        :type="pri"
        @click="handleClick"
        size="primary"
        round
        plain
      ></ca-button>
    </ca-button-group>

    <ca-alert
      title="成功"
      type="success"
      @close="handleClose"
      description="测试辅助文字"
      close-text="i know"
      :closable="true"
      center
    >
      <template v-slot:title="slotProps">
        suc {{slotProps.user}}
      </template>
    </ca-alert>

    <ca-pagination
      :current-page="2"
      :page-size="3"
      :total="55"
      :show-page-count="10"
      @changeCurrentPage="handleClick"
    ></ca-pagination>
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
        pri: "primary",
        user: "tesst"
      };
    },
    methods: {
      handleClick() {
        console.log("success");
      },
      handleClose() {
        console.log("close");
      }
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
