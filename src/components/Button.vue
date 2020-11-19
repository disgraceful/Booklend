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
  font: 14px "SF Pro Display";
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px 18px;
  border-radius: 8px;
  margin-top: 20px;
  transition: all 0.2s ease-in;
}

.card-light .bl-btn {
  color: $red-solid;
  background-color: $red-transparent;
}

.card-light .bl-btn:hover {
  color: #fff;
  background-color: $red-solid;
}

.card-dark .bl-btn {
  color: $teal-solid;
  background-color: $teal-transparent;
}

.card-dark .bl-btn:hover {
  color: #fff;
  background-color: $teal-solid;
}

.bl-btn:hover {
  cursor: pointer;
}

.bl-btn:focus {
  outline: none;
}
</style>
