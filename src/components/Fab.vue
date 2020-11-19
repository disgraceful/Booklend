<template>
  <div
    class="bl-fab"
    :class="{ 'bl-fab__right': right, 'bl-fab__disabled': this.disabled }"
  >
    <div class="bl-fab__content"></div>
  </div>
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

.bl-fab__right > .bl-fab__content {
  transform: rotateY(180deg);
}

.bl-fab > .bl-fab__content {
  position: relative;
  height: 24px;
  width: 24px;
  top: 50%;
  left: 50%;
  margin-left: -12px;
  margin-top: -12px;
}

.bl-fab__content::after,
.bl-fab__content::before {
  content: "";
  position: absolute;
  background-color: $red-solid;
  height: 2px;
  width: 8px;
  border-radius: 5px;
  z-index: 5;
  transition: all 0.3s ease-in;
}

.bl-fab__content::after {
  top: 25%;
  transform: rotate(45deg) translateY(5px);
}

.bl-fab__content::before {
  top: 75%;
  transform: rotate(-45deg) translateY(-5px);
}

.bl-fab:hover {
  background-color: $red-solid;
}

.bl-fab:hover .bl-fab__content::after,
.bl-fab:hover .bl-fab__content::before {
  background-color: #fff;
}

.bl-fab__disabled {
  background-color: $grey-transparent;
}

.bl-fab__disabled > .bl-fab__content::after,
.bl-fab__disabled > .bl-fab__content::before {
  background-color: #000;
}
</style>
