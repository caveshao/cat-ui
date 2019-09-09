<template>
  <div :class="[
  type?'ca-alert--'+type:''
  ]">
    {{title}}
  </div>
</template>
<script>
  export default {
    name: "CaAlert",
    props: {
      type: {
        type: String,
        default: "info"
      },
      title: {
        type: String,
        default: ""
      }
    }
  };
</script>
<style scoped>
  .ca-alert--success {
    color: red;
  }

  .ca-alert--info {
    color: black;
  }

  .ca-alert--waring {
    color: orangered;
  }
</style>