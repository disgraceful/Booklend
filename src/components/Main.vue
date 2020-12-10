<template>
  <main>
    <div class="container">
      <section id="info">
        <div class="main-cards">
          <bl-card class="main-card card-light">
            <h3 class="card-title__decorated">
              Dont just take our word for it!
            </h3>
            <div class="main-card--logo">
              <div class="logo__icon">R</div>
            </div>
            <p class="card-text--heading">
              Read librarian reviews
              <br />
              the R2 Digital Library
            </p>
            <bl-btn>
              Go to the reviews section
            </bl-btn>
            <div class="card-actions">
              <bl-fab right></bl-fab>
              <bl-fab></bl-fab>
            </div>
          </bl-card>
          <bl-card class="main-card card-dark">
            <h3 class="card-title__regular">
              Welcome to the R2 Digital Library
            </h3>
            <p class="card-text__regular">
              The best selection of constantly updated, Health Sciences focused,
              cross-referenced eContent. Featuring thousands of resources from
              the leading health sciences publishers—and growing every day.
            </p>
            <bl-btn>
              Go to the reviews section
            </bl-btn>
          </bl-card>
          <bl-card class="main-card card-light">
            <h3 class="card-title__regular">
              Watch a quick demo of the R2 Digital Library in action
            </h3>
            <p class="card-text__regular">
              You'll see how the new version of the R2 Digital Library is a
              powerful eBook solution for your institution.
            </p>
            <bl-video></bl-video>
          </bl-card>
        </div>
      </section>
      <section id="recent">
        <h1 class="section-title">Recently added</h1>
        <bl-carousel :items="carouselItems"></bl-carousel>
      </section>
      <section id="features">
        <div class="main-cards">
          <bl-card class="main-card card-dark grid-card">
            <h3 class="card-text--heading">
              Expand Your Library Beyond eBooks
            </h3>
            <div>
              <p class="card-text__regular">
                The R2 Digital Library is a web based database available from
                Rittenhouse Book Distributors. It offers fully integrated and
                searchable medical, nursing and allied health source book
                content from key health science publishers, on a web based
                platform.
              </p>
              <bl-btn>
                See full list of titles
              </bl-btn>
            </div>
          </bl-card>
          <bl-card class="main-card card-light">
            <div>
              <i class="card-icon icon-red material-icons ">
                group_add
              </i>
            </div>
            <p class="card-text__regular">
              Connect your users with essential health sciences content from the
              leading publishers - on a platform designed to enhance it
            </p>
          </bl-card>
          <bl-card class="main-card card-light">
            <div>
              <i class="card-icon icon-blue material-icons">
                api
              </i>
            </div>
            <p class="card-text__regular">
              Select resources at the title level and pay once for life of
              edition access
            </p>
          </bl-card>
          <bl-card class="main-card card-light">
            <div>
              <i class="card-icon icon-green material-icons-outlined">
                layers
              </i>
            </div>
            <p class="card-text__regular">
              Explore consortia, patron driven Acquisition and turnkey
              collection development solutions
            </p>
          </bl-card>
          <bl-card class="main-card card-light">
            <div>
              <i class="card-icon icon-yellow material-icons-outlined">
                local_library
              </i>
            </div>
            <p class="card-text__regular">
              Incorporate workflow, integration and collaboration tools designed
              for the contemporary library
            </p>
          </bl-card>
        </div>
      </section>
      <section id="most-popular">
        <h1 class="section-title">Most popular</h1>
        <bl-carousel :items="carouselItems"></bl-carousel>
        <bl-card class="main-card card-light grid-card">
          <div>
            <h3 class="card-title__decorated">
              Featured publisher
            </h3>
            <p class="card-text--heading">Health Administration Press</p>
            <bl-btn> See full list of items</bl-btn>
          </div>
          <div class="card-img">
            <img :src="require('../assets/img/bookasset1.jpg')" />
          </div>
        </bl-card>
      </section>
      <section id="faq">
        <div class="grid-reverse">
          <bl-card class="card-dark">
            <h1 class="card-text--heading">
              Benefits of eContent and the R2 Digital Library
            </h1>
            <p class="card-text__regular">
              If you’ve been thinking of including digital content into your
              library collection, but haven’t yet made the switch, here are
              answers to some very common questions about the benefits of using
              eContent and the R2 Digital Library as your platform.
            </p>
            <bl-btn>Visit our help section</bl-btn>
          </bl-card>
          <bl-card class="main-card card-dark">
            <h1 class="card-text--heading">
              Does the R2 Library have the Titles I need?
            </h1>
            <p class="card-text__regular">
              We have thousands of resources from the leading health sciences
              publishers, so chances are, the answer is yes. To be sure, use the
              search function at the top of the page to access a listing of
              active R2 titles.
            </p>
          </bl-card>
          <bl-card class="main-card card-light card-mini">
            <div style="text-align: right;">
              <i class="card-icon material-icons-outlined">
                help_outline
              </i>
              <p class="card-text__regular">
                1.800.345.6425 X601 / info@r2library.com
              </p>
            </div>
          </bl-card>
        </div>
      </section>
      <footer>
        <p class="footer-text">
          © 2003 - 2020 Rittenhouse Book Distributors, Inc. All rights reserved
        </p>
        <ul class="footer-links">
          <li class="footer-links--link">
            Privacy Policy
          </li>
          <li class="footer-links--link">Copyright Policy</li>
          <li class="footer-links--link">VPAT®</li>
          <li class="footer-links--link">Contact Us</li>
        </ul>
      </footer>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";
import Button from "./Button.vue";
import Fab from "./Fab.vue";
import VideoPlayer from "./VideoPlayer";
import Carousel from "./Carousel.vue";

import { ref } from "vue";
export default {
  components: {
    "bl-card": Card,
    "bl-btn": Button,
    "bl-fab": Fab,
    "bl-carousel": Carousel,
    "bl-video": VideoPlayer,
  },

  setup() {
    const carouselItems = ref([
      {
        title: "Sepsis Management in Resource-limited Settings",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "Tuberculosis in Adults and Children",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "Red Book Atlas of Pediatric Infectious Diseases",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "Mandell, Douglas, and Bennett's Principles and Practice of…",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "add1",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "add2",
        url: require("../assets/img/bookasset1.jpg"),
      },
      {
        title: "add3",
        url: require("../assets/img/bookasset1.jpg"),
      },
    ]);

    return { carouselItems };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: 30px 0px;
  @media screen and (min-width: $tablet) {
    margin: 80px 0px;
  }

  .section-title {
    color: #000;
    font: 700 72px "SF Pro Display";
    text-align: center;

    @media screen and (min-width: $tablet) {
      text-align: start;
    }
  }
}

section > * {
  margin: 30px 0px;
}

.main-cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.grid-reverse {
  @extend .main-cards;

  @media screen and (min-width: $tablet) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 64px;
  }

  & > .grid-card:nth-of-type(1) {
    @media screen and (min-width: $tablet) {
      grid-row: span 2;
    }
  }
}

.main-card {
  position: relative;
  overflow: hidden;
  min-width: 350px;

  .main-card--logo {
    position: absolute;
    right: 85px;
    top: -103px;
  }

  .logo__icon {
    font-size: 200px;
    color: #000;
    opacity: 0.1;

    &::after {
      font-size: 80px;
      top: 124px;
      left: 99px;
    }
  }
}

.card-actions {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  text-align: center;

  & > .bl-fab {
    &:first-child {
      margin-right: 10px;
    }
  }
}

.card-light {
  background-color: #fff;
  color: #000;

  .card-text--heading {
    color: #000;
  }

  .card-title__decorated,
  .card-title__regular {
    color: color("red-solid");
  }

  &.card-mini {
    background-color: $red-solid;
    padding: 20px 24px;
    box-shadow: 0px 0px 20px 5px $red-transparent;

    i {
      color: #fff;
      position: absolute;
      top: 10px;
      left: 24px;
    }

    .card-text__regular {
      color: #fff;
      margin: 0;
    }
  }
}

.card-dark {
  background-color: color("dark-blue");
  color: #fff;

  .card-text--heading,
  .card-title__regular {
    color: color("teal-solid");
  }

  .card-text__regular {
    color: #fff;
  }

  .bl-btn {
    color: color("teal-solid");
    background-color: color("teal-transparent");

    &:hover {
      color: #fff;
      background-color: color("teal-solid");
    }
  }
}

/* Start text styling */
.card-text--heading {
  font: 900 48px "SF Pro Display";
}

.card-title__decorated {
  font: italic 300 24px "SF Pro Display";
}

.card-title__regular {
  font: 500 14px "SF Pro Display";
}

.card-text__regular {
  font: 400 18px "SF Pro Display";
  line-height: 24px;
  color: #000;
  margin: 10px 0px;
}
/* End text styling */

.card-icon {
  font-size: 46px;
  padding-bottom: 10px;

  &.icon-red {
    color: #c62828;
  }
  &.icon-blue {
    color: #42a5f5;
  }

  &.icon-green {
    color: #4caf50;
  }

  &.icon-yellow {
    color: #ffa726;
  }
}

.card-img {
  width: 400px;
  height: 400px;
  overflow: hidden;
  text-align: center;
  margin-bottom: -120px;
  margin-left: 140px;

  img {
    margin: 20px 40px;
    height: 100%;
    width: auto;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    object-fit: cover;
    object-position: top;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  }
}

.grid-card {
  display: grid;
  grid-template-columns: 1fr;
}

footer {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font: 400 14px "SF Pro Display";
  padding-bottom: 30px;

  .footer-text {
    color: #969696;
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: $tablet) {
    flex-direction: row;
  }

  .footer-links--link {
    // display: inline-flex;
    flex: 0 1;
    margin-left: 1rem;
    padding-top: 0.5rem;
    color: color("red-solid");
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      height: 1px;
      width: 100%;
      display: block;
      background-color: color("red-solid");
      position: absolute;
      bottom: -2px;
      transform: scale(0);
      transform-origin: left;
      transition: all 0.3s ease-in;
    }

    &:hover {
      &::after {
        transform: scale(1);
      }
    }
  }
}

@media screen and (min-width: $tablet) {
  .grid-card,
  .main-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .main-card:nth-of-type(1) {
    grid-column: span 2;
  }
}
</style>
