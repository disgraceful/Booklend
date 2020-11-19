<template>
  <div
    class="bl-fab"
    :class="{ 'bl-fab__right': right, 'bl-fab__disabled': this.disabled }"
  ></div>
</template>

<script>
import { h } from "vue";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: true,
    },
  },

  //   render() {
  //     return h(
  //       "div",
  //       {
  //         class: [
  //           "bl-fab",
  //           {
  //             "bl-fab__right": this.right,
  //             "bl-fab__disabled": this.disabled,
  //           },
  //         ],
  //       },
  //       [h("div", { staticClass: "bl-fab__content" })]
  //     );
  //   },
};
</script>

<style lang="scss" scoped>
.bl-fab {
  position: relative;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: $red-solid;
  background-color: $red-transparent;
  transition: all 0.3s ease-in;
}

.bl-fab.bl-fab__right {
  transform: rotateY(180deg);
}

.bl-fab::after,
.bl-fab::before {
  content: "";
  position: absolute;
  background-color: $red-solid;
  height: 2px;
  width: 8px;
  border-radius: 8px;
  z-index: 5;
  transition: all 0.3s ease-in;
  left: calc(50% + 3px);
}

.bl-fab::after {
  top: 25%;
  transform: rotate(45deg) translateY(9px);
}

.bl-fab::before {
  top: 75%;
  transform: rotate(-45deg) translateY(-9px);
}

.bl-fab:hover {
  background-color: $red-solid;
  cursor: pointer;
}

.bl-fab:hover.bl-fab::after,
.bl-fab:hover.bl-fab::before {
  background-color: #fff;
}

.bl-fab__disabled,
.bl-fab__disabled:hover {
  background-color: $grey-transparent;
  cursor: default;
}

.bl-fab__disabled.bl-fab::after,
.bl-fab__disabled.bl-fab::before,
.bl-fab__disabled:hover.bl-fab::after,
.bl-fab__disabled:hover.bl-fab::before {
  background-color: #000;
}
</style>
