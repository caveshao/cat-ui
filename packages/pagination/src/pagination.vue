<template>
  <div id="ca-pagination"></div>
</template>
<script>
  export default {
    name: "CaPagination",
    data() {
      return {
        currentPage: 1
      };
    },
    methods: {
      prePage() {},
      nextPage() {},
      changeCurrentPage(currentPage) {
        this.currentPage = currentPage;
        this.$emit("", this.currentPage);
      }
    }
  };
</script>
<style scoped>
</style>