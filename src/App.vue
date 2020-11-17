<template>
  <bl-header></bl-header>
  <bl-main></bl-main>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
export default {
  name: "App",
  components: { "bl-header": Header, "bl-main": Main },
};
</script>

<style></style>
