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
  <!--
对于这个组件的解读，有以下几个方面：
1. v-model 后的值与 value 是双向绑定的，而此处 value 的值是已经确定的，所以如果 v-model 后的 model 如果与 value 的值一样
radio 就会是选中状态。
2. 如果有多个这样的子组件，一个父组件包含它们。在点击另一个子组件时会触发 Vue 的 change 事件，change 事件会改变 model。也就是说
在点击另一个子组件后，会触发另一个子组件 model 的改变，进而改变父组件 data 中的值。

  -->
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