<template>
  <div class="comment-card" :style="styleObj">
    <div class="comment">
      <div class="comment-avatar">
        <img
          src="https://i.pinimg.com/236x/29/4c/b3/294cb357c2ae3576ebd6f7c2605cc095.jpg"
        />
      </div>
      <div class="comment-data">
        <div class="comment-header">
          <div class="comment-name">Test Name</div>
          <div class="comment-time">10:33</div>
        </div>
        <div class="comment-text">This is comment text</div>
        <bl-btn small text>Resolve</bl-btn>
      </div>
    </div>
    <div class="comment-actions">
      <input
        v-model="comment"
        type="text"
        placeholder="Add comment..."
        @focus="$emit('active', true)"
        @blur="$emit('active', !!comment)"
      />
      <bl-btn
        v-show="comment"
        @click="comment && $emit('submit', comment)"
        small
        text
        class="comment-btn"
        >Send</bl-btn
      >
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
    "bl-btn": Button,
  },

  data() {
    return {
      comment: "",
    };
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

.comment {
  display: flex;

  .comment-data {
    @extend .comment;
    flex-direction: column;
    flex: 1 0;
    font: 500 14px "SF Pro Display";
    color: #969696;
  }

  .comment-header {
    @extend .comment;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    font-weight: 600;
    color: #000;
  }

  .comment-avatar {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.5rem;

    & img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .bl-btn {
    align-self: start;
    box-sizing: border-box;
    margin-bottom: 0.5rem;
    padding-right: 0;
    padding-left: 0;
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
