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
          class="ca-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <!-- 此处是具名插槽 -->
          <slot name="title" v-bind:user="visible">{{title}}</slot>
        </span>
        <p
          class="ca-alert__description"
          v-if="description && !$slots.default"
        >{{ description }}</p>
        <i
          class="ca-alert_clostbtn"
          :class="{
          'is-customed':closeText !== '',
          'ca-icon-close':closeText === ''
          }"
          v-show="closable"
          @click="close()"
        >{{closeText}}</i>
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
        console.log(this.$slots);
        this.$emit("close");
      }
    },
    computed: {
      typeClass() {
        return `ca-alert--${this.type}`;
      }
    }
  };
</script>
<style scoped>
  .ca-alert {
    text-align: left;
  }

  .is-center {
    text-align: center;
  }

  .ca-alert--success {
    color: blue;
  }

  .ca-alert--info {
    color: black;
  }

  .ca-alert--warning {
    color: orangered;
  }

  .ca-alert--error {
    color: red;
  }
</style>