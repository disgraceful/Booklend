<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-container {
  padding: 36px;
  border-radius: 24px;

  @media screen and (min-width: $tablet) {
    padding: 60px;
  }

  .bl-btn {
    margin-top: 20px;
  }
}
</style>
