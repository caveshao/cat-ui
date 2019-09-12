import Vue from 'vue'
import App from './App.vue'
import catUi from '@caveshao/cat-ui'
// import '@caveshao/cat-ui/lib/catcolor.css' 
// 因为打包时设置了 css 的 extract 为 false ，所以 css
// 没有分离，所以不需要单独引入 css 文件

Vue.use(catUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
