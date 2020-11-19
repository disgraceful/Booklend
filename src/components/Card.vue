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
}

.card-light {
  background-color: #fff;
  color: #000;
}

.card-dark {
  background-color: $dark-blue;
  color: #fff;
}

@media screen and (min-width: 768px) {
  .card-container {
    padding: 60px;
  }
}
</style>
