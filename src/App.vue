<template>
  <bl-header v-text-select="comment"></bl-header>
  <bl-main></bl-main>
  <bl-comment
    v-if="comment.show"
    :commentText="comment.commentText"
    :coords="comment.coords"
    @active="comment.active = $event"
    @submit="saveComment($event)"
  ></bl-comment>
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
        document.body.addEventListener('mouseup', (event) => {
          const selected = window.getSelection();
          const selectedText = selected?.toString();
          if (selected !== null && selectedText !== '') {
            const range = selected.getRangeAt(0);
            if (range) {
              binding.value.selection = range;
            }

            binding.value.show = true;
            binding.value.coords.x = event.x;
            binding.value.coords.y = event.y;
          } else if (!binding.value.active) {
            binding.value.show = false;
          }
        });
      }

      // beforeUnmount(el: any, binding: any, vnode: any) {},
    }
  },

  data() {
    return {
      comment: {
        show: false,
        active: false,
        coords: { x: 0, y: 0 },
        selection: null,
        commentText: ''
      }
    };
  },

  methods: {
    getSelectedText() {
      if (document.getSelection) {
        return document.getSelection()?.toString();
      }
    },

    saveComment(commentText) {
      console.log(this.comment);
      this.comment.active = false;
      this.comment.show = false;

      const id = new Date().getTime() + '_';

      //paint bg yellow
      const newSpan = document.createElement('span');
      newSpan.style.backgroundColor = '#ffeb3b';
      newSpan._id = id;
      this.comment.selection.surroundContents(newSpan);
      console.log(this.comment.selection);

      newSpan.addEventListener('mouseover', (event) => {
        console.log(event);
        this.comment.show = true;
        this.comment.commentText = getCommentById(newSpan._id);
        this.comment.coords.x = event.clientX + 10;
        this.comment.coords.y = event.clientY + 10;
      });

      newSpan.addEventListener('mouseleave', (event) => {
        this.comment.show = false;
        this.comment.commentText = '';
      });

      addComment(commentText, id, parent);
    }
  },
  created(){
    console.log(this.$store);
  }
};
</script>
