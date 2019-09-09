<template>
  <button
    class="ca-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type?'ca-button--'+type:'',
      size?'ca-button--'+size:'',
      {
          'is-disabled':disabled,
          'is-loading':loading,
          'is-plain':plain,
          'is-round':round,
          'is-circle':circle
      }
  ]"
  >
    <span>{{disabled}}</span>
  </button>
</template>
<script>
  export default {
    name: "CaButton",
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
    computed: {},
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

  .ca-button--primary {
    background-color: blue;
  }

  .ca-button--success {
    background-color: red;
  }

  .ca-button--warning {
    background-color: orangered;
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