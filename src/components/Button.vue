<template>
  <button class="bl-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bl-btn {
  border: none;
  font: 500 14px "SF Pro Display";
  text-transform: uppercase;
  padding: 12px 18px;
  margin-top: 20px;
  border-radius: 8px;
  color: color("red-solid");
  background-color: color("red-transparent");
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: color("red-solid");
  }

  &:focus {
    outline: none;
  }
}
</style>
