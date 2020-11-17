<template>
  <main style="height: 1000px">
    <bl-card>
      <h1>hello</h1>
    </bl-card>
  </main>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    "bl-card": Card,
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 80px 0;
  background: #f4f5f7;
}
</style>
