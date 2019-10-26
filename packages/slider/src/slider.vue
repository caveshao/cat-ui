<template>
  <div class="ca-slider">
    slider
    <button class="silder-button" ref="button1">button</button>

    <button class="silder-button" ref="button2"></button>
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
    methods: {
      valueChanged() {}
    }
  };
</script>
<style lang="scss">

  @import "global";

  $silder_color: #519eff;

  $silder-border: 1px solid $silder-color;

  @mixin rounded-corners($percentage:25%) {
    -moz-border-radius:$percentage;
    -webkit-border-radius:$percentage;
    border-radius: $percentage;
  }

  .ca-slider {
    @import "globalTest";
    > .silder-button {
      $width: 30px;
      $height: 30px;
      width: $width;
      height: $height;
      margin: {
        left: 10px;
        right: 10px;
      }
      background-color: $silder-color;
      &:hover {
        background-color: $global-color;
      }
      border: $silder-border;
      @include rounded-corners($percentage:30%);//此处为静默注释，混合器使用
    }
  }
</style>