<template>
  <div class="card-container" :style="styling">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    color: {
      type: String,
      default: "#fff",
    },
  },
  setup(props) {
    console.log(props);
    const styling = computed(() => {
      return {
        backgroundColor: props.color,
      };
    });
    return { styling };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  padding: 36px;
  border-radius: 24px;
}

@media screen and (min-width: 768px) {
  .card-container {
    padding: 60px;
  }
}
</style>
