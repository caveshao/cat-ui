import CaPagination from "./src/pagination.vue"

CaPagination.install = function (Vue) {
  Vue.component(CaPagination.name, CaPagination)
}

export default CaPagination