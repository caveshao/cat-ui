import CAButton from "./src/button.vue"


CAButton.install = function(Vue) {
    Vue.component(CAButton.name,CAButton)
}

export default CAButton