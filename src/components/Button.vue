<template>
  <button
    class="bl-btn"
    :class="{
      'bl-btn__small': small,
      'bl-btn__text': text,
      'bl-btn__hover': hover,
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },

    text: {
      type: Boolean,
      default: false,
    },

    hover: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.bl-btn {
  border: none;
  font: 500 14px "SF Pro Display";
  text-transform: uppercase;
  padding: 12px 18px;
  border-radius: 8px;
  color: color("red-solid");
  background-color: color("red-transparent");
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &.bl-btn__small {
    padding: 8px 14px;
    font-size: 12px;
  }

  &.bl-btn__text {
    background-color: transparent;
  }

  &.bl-btn__hover {
    &:hover {
      color: #fff;
      background-color: color("red-solid");
    }
  }
}
</style>
