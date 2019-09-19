// 导入颜色选择器组件
import ColorPicker from './color-picker'
import Button from './button'
import ButtonGroup from './button-group'
import Alert from './alert'
import Pagination from './pagination'
import Radio from './radio'


//存储组件列表
const components = [
  ColorPicker,
  Button,
  ButtonGroup,
  Alert,
  Pagination,
  Radio
]

// Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器
// 当调用 Vue.use 方法的时候就会调用组件的 install 方法，将 Vue 注入到组件中实现组件的全局注册
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

//暴露 install 方法
export default {
  install,
  ColorPicker,
  Button,
  Alert,
  Pagination,
  Radio
}
