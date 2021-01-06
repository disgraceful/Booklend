<template>
  <bl-header v-text-select="test"></bl-header>
  <bl-main></bl-main>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
// import textSelect from "./directive/textSelect";
export default {
  name: "App",
  components: { "bl-header": Header, "bl-main": Main },
  directives: {
    "text-select": {
      beforeMount: function(el: any, binding: any, vnode: any) {
        console.log("directive");
        document.body.addEventListener("mouseup", () => {
          const selected = window.getSelection();
          const selectedText = selected?.toString();
          if (selected !== null && selectedText !== "") {
            const selectedEl = selected?.getRangeAt(0).startContainer
              .parentNode;
            const rect = selectedEl.getBoundingClientRect();
            console.log(rect.top, rect.left);
          }
        });
      },
    },
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>
