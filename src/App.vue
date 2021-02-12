<template>
  <bl-header v-text-select></bl-header>
  <bl-main></bl-main>
  <bl-comment v-if="commentData.show"></bl-comment>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Comment from '@/components/Comment.vue';
import { addComment, getCommentById } from '@/services/commentService.ts';
// import textSelect from "./directive/textSelect";

export default {
  name: 'App',
  components: { 'bl-header': Header, 'bl-main': Main, 'bl-comment': Comment },
  directives: {
    'text-select': {
      beforeMount: function(el, binding, vnode) {
        const _this = binding.instance;
        document.body.addEventListener('mouseup', (event) => {
          const selected = window.getSelection();
          const selectedText = selected?.toString();
          if (selected !== null && selectedText !== '') {
            const range = selected.getRangeAt(0);

            if (!range) {
              return;
            }
            _this.$store.commit('setSelectedText', selectedText);
            _this.$store.commit('setSelection', range);

            _this.$store.commit('setCommentShow', true);
            _this.$store.commit('setCommentCoords', {
              x: event.x,
              y: event.y
            });
          } else if (!_this.commentData.active) {
            _this.$store.commit('setCommentShow', false);
          }
        });
      }

      // beforeUnmount(el: any, binding: any, vnode: any) {},
    }
  },

  data() {
    return {};
  },

  computed: {
    commentData() {
      return this.$store.getters.getCommentData;
    }
  },

  methods: {
    getSelectedText() {
      if (document.getSelection) {
        return document.getSelection()?.toString();
      }
    }
  },

  mounted() {
    this.$store.dispatch('initComments');
  }
};
</script>
