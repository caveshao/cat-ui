<template>
  <transition name="ca-alert-fade">
    <div
      class="ca-alert"
      :class="[typeClass,center?'is-center':'','is-'+effect]"
      v-show="visible"
      role="alert"
    >
      <div class="ca-alert__content">
        <span
          class="el-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{title}}</slot>
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "CaAlert",
    props: {
      type: {
        type: String,
        default: "info"
      },
      title: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ""
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: "light",
        validator: function(value) {
          return ["light", "dark"].indexOf(value) !== -1;
        }
      },
      data() {
        return {
          visible: true
        };
      },
      methods: {
        close() {
          this.visible = false;
          this.$emit("close");
        }
      }
    }
  };
</script>
<style scoped>
  .ca-alert--success {
    color: red;
  }

  .ca-alert--info {
    color: black;
  }

  .ca-alert--waring {
    color: orangered;
  }
</style>