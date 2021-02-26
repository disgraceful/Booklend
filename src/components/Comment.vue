<template>
  <div
    class="comment-card"
    :style="styleObj"
    @mouseover="hoverListener()"
    @mouseleave="unhover()"
  >
    <div class="comment" v-if="commentData.commentText">
      <div class="comment-avatar">
        <img
          src="https://i.pinimg.com/236x/29/4c/b3/294cb357c2ae3576ebd6f7c2605cc095.jpg"
          alt="Avatar"
        />
      </div>
      <div class="comment-data">
        <div class="comment-header">
          <div class="comment-name">Anime Girl</div>
          <div class="comment-time">10:33</div>
        </div>
        <div class="comment-text">{{ commentData.commentText }}</div>
        <bl-btn small text @click="resolve()">Resolve</bl-btn>
      </div>
    </div>
    <div class="comment-actions">
      <input
        v-model="comment"
        type="text"
        placeholder="Add comment..."
        @focus="$store.commit('setCommentActive', true)"
        @blur="$store.commit('setCommentActive', !!comment)"
      />
      <bl-btn
        v-show="comment"
        @click="comment && $store.dispatch('saveComment', comment)"
        small
        text
        class="comment-btn"
      >
        Send
      </bl-btn>
    </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
  components: {
    'bl-btn': Button
  },

  data() {
    return {
      comment: ''
    };
  },

  computed: {
    commentData() {
      return this.$store.getters.getCommentData;
    },

    styleObj() {
      return {
        top: this.commentData.coords.y + 'px',
        left: this.commentData.coords.x + 'px'
      };
    }
  },
  methods: {
    hoverListener() {
      this.$store.commit('setCommentActive', true);
    },

    unhover(){
      this.$store.commit('setCommentActive', false);
      this.$store.commit('setCommentShow', false);
    },

    resolve(){
      this.$store.dispatch('deleteComment');
    }
  }
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
  z-index: 999;

  input[type='text'] {
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
    font: 500 14px 'SF Pro Display';
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
    color: color('teal-solid');
    right: 0px;
  }
}
</style>
