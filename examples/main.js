import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import CatUI from './../packages/index'
// 这里导入了整个模块，如果想要导入单个，使用 import { colorPicker } from

Vue.use(CatUI)
Vue.use(ElementUI)

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
