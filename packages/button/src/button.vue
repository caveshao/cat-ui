<template>
  <button
    class="ca-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type?'ca-button--'+type:'',
      buttonSize?'ca-button--'+buttonSize:'',
      {
          'is-disabled':buttonDisabled,
          'is-loading':loading,
          'is-plain':plain,
          'is-round':round,
          'is-circle':circle
      }
  ]"
  >
    <i
      :class="icon"
      v-if="icon"
    ></i>
    <span>{{disabled}}</span>
  </button>
</template>
<script>
  export default {
    name: "CaButton",
    //依赖注入，类似于 props，使用祖先组件要传递下来的数据，非响应式。此处是如果按钮包含在
    // 表单中，所应该注入的数据
    inject: {
      caForm: {
        default: ""
      },
      caFormItem: {
        default: ""
      }
    },
    data() {
      return {};
    },
    props: {
      type: {
        type: String,
        default: "default"
      },
      size: String,
      nativeType: {
        type: String,
        default: "button"
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },
    computed: {
      buttonSize() {
        return this.size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit("click", evt);
      }
    }
  };
</script>
<style scoped>
  .ca-button {
    border-style: solid;
    outline: none;
    padding: 10px 20px;
    width: 110px;
    height: 50px;
    color: white;
  }
  button.is-round {
    border-radius: 20%/50%;
  }

  button.is-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  button.is-disabled {
    opacity: 0.2;
  }

  .ca-button--primary {
    background-color: blue;
  }

  .ca-button--primary.is-plain {
    color: blue;
    border: 1px solid blue;
    background: rgb(193, 193, 255);
  }

  .ca-button--primary.is-plain:hover {
    background-color: blue;
    color: white;
  }

  .ca-button--primary.is-plain:focus {
    background-color: blue;
    color: white;
  }

  .ca-button--success {
    background-color: red;
  }

  .ca-button--success.is-plain {
    color: red;
    border: 1px solid red;
    background: rgb(246, 204, 184);
  }

  .ca-button--success.is-plain:hover {
    background-color: red;
    color: white;
  }

  .ca-button--success.is-plain:focus {
    background-color: red;
    color: white;
  }

  .ca-button--warning {
    background-color: orangered;
  }

  .ca-button--warning.is-plain {
    color: orangered;
    border: 1px solid orangered;
    background: rgb(247, 216, 45);
  }

  .ca-button--warning.is-plain:hover {
    background-color: orangered;
    color: orangered;
  }

  .ca-button--warning.is-plain:focus {
    background-color: orangered;
    color: white;
  }

  .ca-button--medium {
    width: 90px;
    height: 45px;
  }

  .ca-button--small {
    width: 85px;
    height: 40px;
  }

  /* 横轴20% */
</style>