<template>
  <bl-header v-text-select="comment"></bl-header>
  <bl-main></bl-main>
  <bl-comment
    v-if="comment.show"
    :coords="comment.coords"
    @active="comment.active = $event"
    @submit="saveComment($event)"
  ></bl-comment>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Comment from "@/components/Comment.vue";

// import textSelect from "./directive/textSelect";

export default {
  name: "App",
  components: { "bl-header": Header, "bl-main": Main, "bl-comment": Comment },
  directives: {
    "text-select": {
      beforeMount: function(el, binding, vnode) {
        document.body.addEventListener("mouseup", (event) => {
          const selected = window.getSelection();
          const selectedText = selected?.toString();
          if (selected !== null && selectedText !== "") {
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
      },

      // beforeUnmount(el: any, binding: any, vnode: any) {},
    },
  },

  data() {
    return {
      comment: {
        show: false,
        active: false,
        coords: { x: 0, y: 0 },
        selection: null,
      },
    };
  },

  methods: {
    getSelectedText() {
      if (document.getSelection) {
        return document.getSelection()?.toString();
      }
    },

    saveComment(commentText) {
      this.comment.active = false;

      //paint bg yellow
      const newSpan = document.createElement("span");
      newSpan.style.backgroundColor = "#ffeb3b";
      this.comment.selection.surroundContents(newSpan);
    },
  },
};
</script>
