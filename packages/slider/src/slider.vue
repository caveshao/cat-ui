<template>
  <div class="ca-slider">
    slider
  </div>
</template>
<script>
  export default {
    name: "CaSlider",
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: [Number, Array],
        default: 0
      },
      showInput: {
        type: Boolean,
        default: false
      },
      showInputControls: {
        type: Boolean,
        default: true
      },
      inputSize: {
        type: String,
        default: "small"
      },
      showStops: {
        type: Boolean,
        default: false
      },
      showTooltip: {
        type: Boolean,
        default: true
      },
      formatTooltip: Function,
      disabled: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      },
      height: {
        type: String
      },
      debounce: {
        type: Number,
        default: 300
      },
      label: {
        type: String
      },
      tooltipClass: {
        type: String
      },
      marks: Object
    },
    components: {},
    data() {
      return {
        firstValue: null,
        secondValue: null,
        oldValue: null,
        dragging: false,
        sliderSize: 1
      };
    },
    watch: {},
    methods: {}
  };
</script>
<style scoped>
</style>