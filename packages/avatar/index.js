import CaAvatar from "./src/main.vue"

CaAvatar.install = function(Vue) {
    Vue.component(CaAvatar.name,CaAvatar)
}

export default CaAvatar