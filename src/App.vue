<template>
  <bl-header v-text-select="comment"></bl-header>
  <bl-main></bl-main>
  <bl-comment v-if="comment.active" :coords="comment.coords"></bl-comment>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Comment from "@/components/Comment.vue";

// import textSelect from "./directive/textSelect";

const directiveFnc = (el: any, binding: any, vnode: any) => {
  const selected = window.getSelection();
  const selectedText = selected?.toString();
  if (selected !== null && selectedText !== "") {
    const selectedEl = selected?.getRangeAt(0).startContainer.parentElement;
    if (selectedEl != null) {
      const rect = selectedEl.getBoundingClientRect();
      console.log(rect);
      console.log(binding);
      binding.value.active = true;
      binding.value.coords.x = rect.left + 150;
      binding.value.coords.y = rect.top + 20;
    }
  }
};

export default {
  name: "App",
  components: { "bl-header": Header, "bl-main": Main, "bl-comment": Comment },
  directives: {
    "text-select": {
      beforeMount: function(el: any, binding: any, vnode: any) {
        document.body.addEventListener(
          "mouseup",
          directiveFnc.bind(this, el, binding, vnode)
        );
      },

      beforeUnmount(el: any, binding: any, vnode: any) {
        document.body.removeEventListener(
          "mouseup",
          directiveFnc.bind(this, el, binding, vnode)
        );
      },
    },
  },

  data() {
    return {
      comment: {
        active: false,
        coords: { x: 0, y: 0 },
      },
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
