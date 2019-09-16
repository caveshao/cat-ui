<template>
  <div class="ca-button-group">
    <slot>没有内容</slot>
    <!--如果不传入插槽内容，显示该文字-->
  </div>
</template>
<script>
  export default {
    name: "CaButtonGroup"
  };
</script>