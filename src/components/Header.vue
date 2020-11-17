<template>
  <header>
    <div class="header-content">
      <div class="logo" @click="toggleSidebar">
        <div class="logo__icon">R</div>
        <div class="logo__company">
          Digital <br />
          Library
        </div>
      </div>
      <transition name="side">
        <div class="nav-sidebar" v-show="sidebarOpened">
          <ul class="nav-sidebar__list">
            <li @click="toggleSidebar">Close Menu</li>
            <li v-for="link in links" :key="link">{{ link }}</li>
          </ul>
        </div>
      </transition>
      <div class="spacer"></div>

      <ul class="nav-links" v-show="!searchOpened">
        <li class="nav-links__item" v-for="link in links" :key="link">
          {{ link }}
        </li>
      </ul>
      <div class="nav-searchbar" v-show="searchOpened">
        <input type="text" name="search" placeholder="Search" />
      </div>
      <ul class="nav-actions">
        <li>
          <i class="material-icons" @click="searchOpened = !searchOpened">
            {{ searchText }}
          </i>
        </li>
        <li>
          <i class="material-icons">
            account_circle
          </i>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const links = ref(["Browse", "A-Z Index", "About", "FAQs", "User Guide"]);
    const sidebarOpened = ref(false);
    const searchOpened = ref(false);

    const searchText = computed(() => {
      return searchOpened.value ? "clear" : "search";
    });

    function toggleSidebar() {
      if (window.innerWidth <= 768) {
        sidebarOpened.value = !sidebarOpened.value;
      }
    }

    return { links, sidebarOpened, toggleSidebar, searchOpened, searchText };
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #181819;
  color: #f5f5f5;
}

.header-content {
  display: flex;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 16px;
  font-family: "SF Pro Display";
  align-items: center;
}

.header-content li:hover {
  cursor: pointer;
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
  font: 48px "SF Mono";
  position: relative;
}

.logo__icon::after {
  content: "2";
  color: #d0021b;
  font-size: 24px;
  // line-height: 29px;
  position: absolute;
  opacity: 1;
  top: 26px;
  transform: translateX(-7px);
}

.logo__company {
  font: 14px "SF Pro Rounded";
  text-transform: uppercase;
  align-self: center;
  margin-left: 1rem;
}

.spacer {
  flex-grow: 1;
}

.nav-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #181819;
  padding: 12px 16px;
  box-sizing: border-box;
  font-size: 48px;
  transform: scaleY(1);
  transform-origin: top;
  transition: all 0.3s ease-in-out;
}

.nav-sidebar__list {
  flex-flow: column wrap;
}

.nav-links {
  display: none;
  padding: 20px 0;
  font: 500 18px "SF Pro Display";
  line-height: 21px;
  flex-grow: 1;
  justify-content: center;
}

.nav-links > .nav-links__item {
  margin-left: 1.2rem;
}

.nav-sidebar li:hover,
.nav-links li:hover {
  color: #d0021b;
}

.nav-searchbar {
  flex-grow: 10;
  margin: 0 0.6rem;
}

.nav-searchbar > input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  font: 14px "SF Pro Display";
  border-radius: 8px;
  padding: 6px 10px;
  border: none;
}

.nav-actions {
  padding: 20px 0;
}

.nav-actions > li:nth-of-type(1) {
  margin-right: 1rem;
}

.nav-actions i {
  font-size: 22px;
  display: block;
}

.side-enter-active,
.side-leave-active {
  transform: scaleY(0);
}

@media screen and (min-width: 768px) {
  .spacer {
    display: none;
  }

  .nav-links {
    display: flex;
  }
}
</style>
