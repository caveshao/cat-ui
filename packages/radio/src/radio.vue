<template>
  <label
    class="ca-radio"
    :class="[
      border && radioSize?'ca-radio-'+radioSize:'',
      {
          'is-disabled':isDisabled,
          'is-focus':focus,
          'is-bordered':border,
          'is-checked':model ===  label
      }]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model :label"
  >
    <span>
      <input
        ref="radio"
        type="radio"
        :value="label"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        :class="{
        'is-checked':model===value,
        }"
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
      name: String,
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
        set(val) {
          return val + 1;
        }
      }
    }
  };
</script>
<style>
</style>