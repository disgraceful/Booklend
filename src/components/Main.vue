<template>
  <main>
    <div class="container">
      <section id="info">
        <div class="main-cards">
          <bl-card class="main-card card-light">
            <h3 class="card-title__decorated">
              Dont just take our word for it!
            </h3>
            <div class="main-card__logo">
              <div class="logo__icon">R</div>
            </div>
            <p class="card-text__heading">
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
            <div class="video-container">
              <img
                class="video"
                src="https://interamericanheart.org/wp-content/uploads/2020/03/covid19maxresdefault.jpg"
              />
              <button class="play-btn">
                <div class="play-btn--arrow"></div>
              </button>
            </div>
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
            <h3 class="card-text__heading">
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
            <p class="card-text__heading">Health Administration Press</p>
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
            <h1 class="card-text__heading">
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
            <h1 class="card-text__heading">
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
import Carousel from "./Carousel.vue";
import { ref } from "vue";
export default {
  components: {
    "bl-card": Card,
    "bl-btn": Button,
    "bl-fab": Fab,
    "bl-carousel": Carousel,
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
  margin: 30px 0;
}

section > * {
  margin: 30px 0px;
}
.grid-reverse,
.main-cards {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}

.main-card {
  position: relative;
  overflow: hidden;
}

.main-card__logo {
  position: absolute;
  right: 85px;
  top: -103px;
}

.main-card .logo__icon {
  font-size: 200px;
  color: #000;
  opacity: 0.1;
}

.main-card .logo__icon::after {
  font-size: 80px;
  top: 124px;
  left: 99px;
}

.main-card .card-actions {
  margin-right: -16px;
  margin-bottom: -16px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

.main-card .card-actions > .bl-fab:first-child {
  margin-right: 10px;
}

.card-text__heading {
  max-width: 75%;
  font: 48px "SF Pro Display";
  font-weight: 900;
}

.card-light .card-text__heading {
  color: #000;
}

.card-dark .card-text__heading {
  color: $teal-solid;
}

.card-light .card-title__decorated {
  color: $red-solid;
  font: 300 24px "SF Pro Display";
  font-style: italic;
}

.card-title__regular {
  font: 500 14px "SF Pro Display";
}

.card-dark .card-title__regular {
  color: $teal-solid;
}

.card-light .card-title__regular {
  color: $red-solid;
}

.card-text__regular {
  font: 400 18px "SF Pro Display";
  line-height: 24px;
  color: #000;
  margin-top: 10px;
}

.card-dark .card-text__regular {
  color: #fff;
}

.video-container {
  width: 210px;
  height: 160px;
  position: absolute;
  margin-top: 8px;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  box-shadow: 0 20px 40px 0 rgba(208, 2, 27, 0.3);
  border-radius: 12px;
  overflow: hidden;
}

.video-container:hover {
  transform: translate(6px, 6px);
  box-shadow: 0 10px 20px 0 rgba(208, 2, 27, 0.3);
}

.video-container::after {
  content: "";
  height: 100%;
  width: 100%;
  background-color: rgba(208, 2, 27, 0.7);
  top: 0;
  left: 0;
  z-index: 4;
  position: absolute;
}

.video-container > .video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.video-container > .play-btn {
  margin: 0;
  position: absolute;
  width: 72px;
  height: 72px;
  border: 8px solid rgba(255, 255, 255, 0.3);
  background-clip: padding-box;
  top: calc(50% - 36px);
  left: 50%;
  margin-left: -36px;
  z-index: 10;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.play-btn:hover {
  border-color: #fff;
  background-clip: border-box;
}

.play-btn:hover > .play-btn--arrow {
  left: calc(50% - 13px);
  top: calc(50% - 25px);
  border-top: 26px solid transparent;
  border-bottom: 26px solid transparent;
  border-left: 35px solid #d0021b;
}

.play-btn--arrow {
  position: absolute;
  left: calc(50% - 5px);
  top: calc(50% - 10px);
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 16px solid #d0021b;
}

.card-icon {
  font-size: 46px;
  padding-bottom: 10px;
}

.card-icon.icon-red {
  color: #c62828;
}

.card-icon.icon-blue {
  color: #42a5f5;
}

.card-icon.icon-green {
  color: #4caf50;
}

.card-icon.icon-yellow {
  color: #ffa726;
}

.section-title {
  color: #000;
  font: 700 72px "SF Pro Display";
  text-align: center;
}

.main-card .card-img {
  width: 400px;
  height: 400px;
  overflow: hidden;
  text-align: center;
  margin-bottom: -120px;
  margin-left: 140px;
}

.card-img > img {
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

.grid-card {
  display: grid;
  grid-template-columns: 1fr;
}

.grid-card .card-text__heading {
  max-width: 100%;
}

.card-mini.card-light {
  background-color: $red-solid;
  padding: 20px 24px;
  box-shadow: 0px 0px 20px 5px $red-transparent;
}

.card-mini i {
  color: #fff;
  position: absolute;
  top: 10px;
  left: 24px;
}

.card-mini .card-text__regular {
  color: #fff;
  margin: 0;
}

footer {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 30px;
  font-family: "SF Pro Display";
}

.footer-text {
  color: #969696;
}

.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-links--link {
  margin-left: 1rem;
  padding-top: 0.5rem;
  color: $red-solid;
  cursor: pointer;
  position: relative;
}

.footer-links--link:hover::after {
  transform: scale(1);
}

.footer-links--link::after {
  transform: scale(0);
  content: "";
  height: 1px;
  width: 100%;
  display: block;
  background-color: $red-solid;
  position: absolute;
  bottom: -2px;
  transform-origin: left;
  transition: all 0.3s ease-in;
}

@media screen and (min-width: 768px) {
  section {
    margin: 80px 0;
  }

  .grid-reverse {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 64px;
  }

  .grid-reverse > *:nth-of-type(1) {
    grid-row: span 2;
  }

  .grid-card,
  .main-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .main-card:nth-of-type(1) {
    grid-column: span 2;
  }

  .main-card .card-actions {
    margin-right: -40px;
    margin-bottom: -40px;
    margin-top: 4px;
    justify-content: flex-end;
  }

  .section-title {
    text-align: start;
  }

  .footer-links {
    flex-direction: row;
  }
}
</style>
