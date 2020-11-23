<template>
  <div class="bl-carousel">
    <div class="bl-carousel-action">
      <bl-fab right :disabled="!canBackwards" @click="backwards"></bl-fab>
    </div>
    <div
      class="bl-carousel-item"
      v-for="item in visibleItems"
      :key="item.title"
    >
      <div class="bl-carousel-item--img">
        <img :src="item.url" />
      </div>
      <p class="bl-carousel-item--title">{{ item.title }}</p>
    </div>
    <div class="bl-carousel-action">
      <bl-fab :disabled="!canForward" @click="forward"></bl-fab>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import Fab from "./Fab.vue";

export default {
  props: {
    items: { type: Array, required: true },
  },
  components: {
    "bl-fab": Fab,
  },

  setup(props) {
    const width = ref(window.innerWidth);
    const maxItems = ref(4);
    const visibleIndex = ref(0);
    const visibleItems = computed(() =>
      props.items.length > maxItems.value
        ? props.items.slice(
            visibleIndex.value,
            maxItems.value + visibleIndex.value
          )
        : props.items
    );

    const watcher = watchEffect(() => {
      if (width.value <= 480) {
        maxItems.value = 2;
      } else {
        maxItems.value = 4;
      }
    });
    const canForward = computed(() => {
      return visibleIndex.value + maxItems.value < props.items.length;
    });

    const canBackwards = computed(() => {
      return visibleIndex.value > 0;
    });

    function forward() {
      if (canForward.value) {
        visibleIndex.value++;
      }
    }

    function backwards() {
      if (canBackwards.value) {
        visibleIndex.value--;
      }
    }

    function onResize() {
      width.value = window.innerWidth;
    }

    return {
      maxItems,
      visibleItems,
      forward,
      backwards,
      canForward,
      canBackwards,
      watcher,
      onResize,
    };
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.bl-carousel {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  width: 70%;
  margin: 0 auto;
}

.bl-carousel > .bl-carousel-item {
  max-width: 220px;
  padding: 20px;
  background-color: #fff;
  border-radius: 24px;
  box-sizing: content-box;
  transition: all 0.2s ease-in;
}

.bl-carousel-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.bl-carousel-item:hover .bl-carousel-item--title {
  color: $red-solid;
}

.bl-carousel-item--title {
  font: 500 18px "SF Pro Display";
  color: #3d3d3d;
  display: none;
}

.bl-carousel-item--img {
  max-width: 80px;
  max-height: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
}

.bl-carousel-item--img > img {
  width: 100%;
  object-fit: cover;
}

.bl-carousel-action:nth-of-type(1) {
  left: -66px;
}

.bl-carousel-action {
  display: inline-block;
  top: 50%;
  position: absolute;
  right: -66px;
}

@media screen and (min-width: 480px) {
  .bl-carousel {
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
  }
}

@media screen and (min-width: 768px) {
  .bl-carousel-item--title {
    display: block;
  }
  .bl-carousel {
    width: 100%;
    justify-items: stretch;
  }
}
</style>
