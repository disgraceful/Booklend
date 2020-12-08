<template>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="logo" @click="toggleSidebar">
          <div class="logo__icon">R</div>
          <div class="logo__company">
            Digital <br />
            Library
          </div>
        </div>
        <transition name="down">
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
        <transition name="side">
          <div class="nav-searchbar" v-show="searchOpened">
            <input type="text" name="search" placeholder="Search" />
          </div>
        </transition>
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

<style lang="scss">
header {
  background: color("black-solid");
  color: color("white-solid");
  z-index: 5;

  ul,
  .logo {
    display: flex;
  }
}

.header-content {
  display: flex;
  font-family: "SF Pro Display";
  align-items: center;

  li {
    &:hover {
      cursor: pointer;
    }
  }
}

.logo {
  color: #fff;
  opacity: 0.8;

  .logo__icon {
    display: inline-block;
    font: 48px "SF Mono";
    position: relative;

    &::after {
      content: "2";
      color: color("red-solid");
      font-size: 24px;
      position: absolute;
      opacity: 1;
      top: 26px;
      transform: translateX(-7px);
    }
  }

  .logo__company {
    font: 14px "SF Pro Rounded";
    text-transform: uppercase;
    align-self: center;
    margin-left: 1rem;
  }
}

.spacer {
  flex-grow: 1;
  @media screen and (min-width: $tablet) {
    display: none;
  }
}

.nav-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: color("black-solid");
  padding: 12px 16px;
  box-sizing: border-box;
  font-size: 48px;
  transform: scaleY(1);
  transform-origin: top;
  transition: all 0.3s ease-in-out;
  z-index: 5;

  .nav-sidebar__list {
    flex-flow: column wrap;
  }
}

.nav-sidebar li:hover,
.nav-links li:hover {
  color: color("red-solid");
}

.nav-links {
  display: none;
  padding: 20px 0;
  font: 500 18px "SF Pro Display";
  line-height: 21px;
  flex-grow: 1;
  justify-content: center;

  & > .nav-links__item {
    margin-left: 1.2rem;
  }

  @media screen and (min-width: $tablet) {
    display: flex;
  }
}

.nav-searchbar {
  flex-grow: 10;
  margin: 0 0.6rem;
  transform: scaleX(1);
  transform-origin: right;
  transition: all 0.3s ease-out;

  & > input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    font: 14px "SF Pro Display";
    border-radius: 8px;
    padding: 6px 10px;
    border: none;
  }
}

.nav-actions {
  padding: 20px 0;

  i {
    font-size: 22px;
    display: block;
  }

  & > li:nth-of-type(1) {
    margin-right: 1rem;
  }
}

.down-enter-active,
.down-leave-active {
  transform: scaleY(0);
}

.side-enter-active,
.side-leave-active {
  transform: scaleX(0);
}
</style>
