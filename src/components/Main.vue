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
            <div class="img-container"></div>
          </bl-card>
        </div>
      </section>
      <section id="recent">
        <h1 class="section-title">Recently added</h1>
        <bl-carousel :items="carouselItems"></bl-carousel>
      </section>
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

.main-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.main-card {
  position: relative;
  grid-column: span 2;
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

.card-light .card-text__heading {
  max-width: 75%;
  font: 48px "SF Pro Display";
  font-weight: 900;
  color: #000;
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

.section-title {
  color: #000;
  font: 700 72px "SF Pro Display";
  text-align: center;
}

@media screen and (min-width: 768px) {
  section {
    margin: 80px 0;
  }

  .main-card:not(:nth-of-type(1)) {
    grid-column: span 1;
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
}
</style>
