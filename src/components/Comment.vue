<template>
  <div class="comment-card" :style="styleObj">
    <div class="comment-actions">
      <input type="text" placeholder="Add comment..." />
      <bl-button small text class="comment-btn">Send</bl-button>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },

  components: {
    "bl-button": Button,
  },

  computed: {
    styleObj() {
      return {
        top: this.coords.y + "px",
        left: this.coords.x + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-card {
  position: absolute;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fff;
  color: #000;
  //   min-height: 200px;
  min-width: 300px;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);

  input[type="text"] {
    width: 100%;
    padding: 0.4rem;
    background-color: rgba(244, 245, 247, 1);
    line-height: 1.2rem;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    padding-right: 60px;

    &:focus {
      outline: none;
    }
  }
}

.comment-actions {
  position: relative;

  .comment-btn {
    position: absolute;
    bottom: 0px;
    color: color("teal-solid");
    right: 0px;
  }
}
</style>
