<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <div class="logo__icon">R</div>
        <div class="logo__company">
          Digital <br />
          Library
        </div>
      </div>
      <ul class="nav-links">
        <li class="nav-links__item" v-for="link in links" :key="link">
          {{ link }}
        </li>
      </ul>
      <ul class="nav-actions">
        <li>
          <span class="material-icons">
            search
          </span>
        </li>
        <li>
          <span class="material-icons">
            account_circle
          </span>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const links = ref(["Browse", "A-Z Index", "About", "FAQs", "User Guide"]);
    return { links };
  },
};
</script>

<style lang="scss" scoped>
header {
  //   align-items: center;
  background: #181819;
  color: #f5f5f5;
}

.header-content {
  display: flex;
  max-width: 940px;
  margin: 0 auto;
}

header ul,
.logo {
  display: flex;
}

.logo {
  color: #fff;
  opacity: 0.8;
}

.logo__icon {
  font: 48px/58px "SF Mono";
  position: relative;
}

.logo__icon::after {
  content: "2";
  color: #d0021b;
  font-size: 24px;
  line-height: 29px;
  position: absolute;
  opacity: 1;
  bottom: 0;
  transform: translateX(-7px) translateY(-3px);
}

.logo__company {
  font: 14px "SF Pro Rounded";
  text-transform: uppercase;
  align-self: center;
  margin-left: 1rem;
}

.nav-links {
  padding: 20px 0;
  font: 500 18px "SF Pro Display";
  line-height: 21px;
  flex-grow: 1;
  justify-content: center;
}

.nav-links > .nav-links__item {
  margin-left: 1.2rem;
}

.nav-actions {
  padding: 20px 0;
}

.nav-actions > li:nth-of-type(1) {
  margin-right: 1.5rem;
}
</style>
