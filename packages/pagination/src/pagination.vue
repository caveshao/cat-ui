<template>
  <div class="ca-pagination">
    <ul
      @click="onPagerClick"
      class="ca-pager"
    >
      <li
        :class="{active:currentPage === 1,disabled}"
        v-if="pageCount > 0"
        class="number"
      >1</li>
      <li
        class="ca-icon more btn-quickprev"
        :class="[quickprevIconClass,{disabled}]"
        v-if="showPrevMore"
        @mouseenter="onMouseenter('left')"
        @mouseleave="quickprevIconClass = 'ca-icon-more'"
      ></li>
      <li
        v-for="pager in pagers"
        :key="pager"
        :class="{active:currentPage === pager,disabled}"
        class="number"
      >{{pager}}</li>
      <li
        class="ca-icon more btn-quicknext"
        :class="[quicknextIconClass,{disabled}]"
        v-if="showNextMore"
        @mouseenter="onMouseenter('right')"
        @mouseleave="quicknextIconClass = 'ca-icon-more'"
      ></li>
      <li
        :class="{active:currentPage === pageCount,disabled}"
        class="number"
        v-if="pageCount > 1"
      >
        {{pageCount}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "CaPagination",
    props: {
      currentPage: Number,
      pageCount: Number,
      pagerCount: Number,
      disabled: Boolean
    },
    data() {
      return {
        current: null,
        showPrevMore: false,
        showNextMore: false,
        quicknextIconClass: "ca-icon-more",
        quickprevIconClass: "ca-icon-more"
      };
    },
    methods: {
      prePage() {},
      nextPage() {},
      changeCurrentPage(currentPage) {
        this.currentPage = currentPage;
        this.$emit("", this.currentPage);
      },
      onMouseenter(direction) {
        if (this.disabled) return;
        if (direction === "left") {
          this.quickprevIconClass = "ca-icon-d-arrow-left";
        } else {
          this.quicknextIconClass = "ca-icon-d-arrow-right";
        }
      },
      onPagerClick(event) {}
    },
    computed: {
      pagers() {}
    }
  };
</script>
<style scoped>
</style>