<template>
  <label
    class="ca-radio"
    :class="[
      border && radioSize?'ca-radio-'+radioSize:'',
      {
          'is-disabled':isDisabled,
          'is-focus':focus,
          'is-bordered':border,
          'is-checked': model ===  label
      }]"
    role="radio"
  >
    <span :class="{
        'is-checked': model === label,
        }">
      <span class="ca-radio_inner"></span>
      <input
        ref="radio"
        type="radio"
        :value="label"
        v-model="model"
        :name="name"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        class="ca-radio_original"
      >
    </span>
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: "CaRadio",
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: {
        type: String,
        default: ""
      },
      border: Boolean,
      size: String
    },
    data() {
      return {
        facus: false
      };
    },
    methods: {
      handleChange() {}
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        // v-model 是数据的双向绑定，v-model = model 不仅会拦截取值，还会拦截赋值
        // input 和 change 都是 radio 自带事件
        set(val) {
          // 改变父组件中使用子组件时的 v-model
          this.$emit("input", val);
          this.$refs.radio &&
            (this.$refs.radio.checked = this.model === this.label);
        }
      }
    }
  };
</script>
<style>
  .ca-radio {
    position: relative;
  }

  .is-focus .is-checked .ca-radio_inner {
    color: #409eff;
    background: #409eff;
  }

  .ca-radio_inner {
    display: inline-block;
    border: 1px solid #dedfe6;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: relative;
    background-color: #ffffff;
    cursor: pointer;
    box-sizing: border-box;
  }

  .ca-radio_inner::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: #ffffff;
  }

  .ca-radio_original {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: 0;
    z-index: -1;
  }
</style>