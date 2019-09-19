<template>
  <div class="ca-pagination">
    <button
      @click="prePage"
      :disabled="currentPage === 1"
    >上一页</button>
    <template v-if="pageCount < showPageCount">
      <button
        v-for="i in pageCount"
        @click="changeCurrentPage(i)"
        :class="{active:i === currentPage}"
        :key="i"
      >{{i}}</button>
    </template>
    <!-- 取要显示页面按钮数的一半作为比较标准 -->
    <template v-else-if="currentPage < Math.floor(showPageCount/2)">
      <button
        v-for="i in loopPageCount"
        @click="changeCurrentPage(i)"
        :class="{active:i === currentPage}"
        :key="i"
      >{{i}}</button>
      <button>...</button>
      <button @click="changeCurrentPage(pageCount)">{{pageCount}}</button>
    </template>
    <template v-else-if="currentPage>pageCount - Math.floor(showPageCount/2)">
      <button @click="changeCurrentPage(1)">1</button>
      <button>...</button>
      <button
        v-for="i in loopPageCount"
        @click="changeCurrentPage(i+pageCount-loopPageCount)"
        :class="{active:(i+pageCount-loopPageCount) === currentPage}"
        :key="i+pageCount-loopPageCount"
      >
        {{i+pageCount-loopPageCount}}</button>
    </template>
    <template v-else>
      <button @click="changeCurrentPage(1)">1</button>
      <button>...</button>
      <button
        v-for="i in (showPageCount-4)"
        :key="i"
        :class="{active:(currentPage - Math.ceil((showPageCount-4) / 2) + i) === currentPage}"
        @click="changeCurrentPage(currentPage - Math.ceil((showPageCount-4) / 2) + i)"
      >
        {{currentPage - Math.ceil((showPageCount-4) / 2) + i}}
      </button>
      <button>...</button>
      <button @click="changeCurrentPage(pageCount)">{{pageCount}}</button>
    </template>
    <button
      @click="nextPage"
      :disabled="currentPage === pageCount"
    >下一页</button>
  </div>
</template>
<script>
  export default {
    name: "CaPagination",
    props: {
      currentPage: {
        type: Number,
        default: 1 //当前页
      },
      showPageCount: {
        //最多显示的页面按钮数量
        type: Number,
        default: 8
      },
      pageSize: Number, //单页数据条数
      total: Number, //总数据条数
      pageTotal: Number //规定显示多少页
    },
    data() {
      return {
        loopPageCount: this.showPageCount - 2
      };
    },
    methods: {
      prePage() {
        this.currentPage -= 1;
        this.$emit("changeCurrentPage", this.currentPage);
      },
      nextPage() {
        this.currentPage += 1;
        this.$emit("changeCurrentPage", this.currentPage);
      },
      changeCurrentPage(currentPage) {
        this.currentPage = currentPage;
        this.$emit("changeCurrentPage", this.currentPage);
      }
    },
    computed: {
      pageCount() {
        if (this.pageTotal) {
          return this.pageTotal;
        } else {
          if (this.total && this.pageSize) {
            return Math.ceil(this.total / this.pageSize);
          } else {
            return 0;
          }
        }
      }
    }
  };
</script>
<style scoped>
  .active {
    color: blue;
  }
</style>