<template>
  <div class="radio">
    <label
      class="ca-radio"
      :class="[
      border && radioSize?'ca-radio-'+radioSize:'',
      {
          'is-disabled':isDisabled,
          'is-focus':focus,
          'is-bordered':border,
          'is-checked':model === label
      }]"
      role="radio"
      :aria-checked="model === label"
      :aria-disabled="isDisabled"
      :tabindex="tabIndex"
      @keydown.space.stop.prevent="model = isDisabled ? model :label"
    >
      <span><span></span>
        <input type="text"></span>
    </label>
  </div>
</template>
<script>
  export default {
    name: "CaRadio",
    data() {
      return {};
    }
  };
</script>
<style>
</style>