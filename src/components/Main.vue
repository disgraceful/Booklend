<template>
  <main style="height: 1000px">
    <div class="main-cards">
      <bl-card class="main-card">
        <h3 class="card-title__red">Dont just take our word for it!</h3>
        <p class="card-text__large">
          Read librarian reviews
          <br />
          the R2 Digital Library
        </p>
        <button class="card-button">Go to the reviews section</button>
      </bl-card>
      <bl-card class="main-card" color="#0E1E31">
        <h1>Welcome to the R2 Digital Library</h1>
        <p>
          The best selection of constantly updated, Health Sciences focused, cross-referenced
          eContent. Featuring thousands of resources from the leading health sciences publishers—and
          growing every day.
        </p>
        <button>Start a free 30-day trial</button>
      </bl-card>
      <bl-card class="main-card">
        <h1>Watch a quick demo of the R2 Digital Library in action</h1>
        <p>
          You'll see how the new version of the R2 Digital Library is a powerful eBook solution for
          your institution.
        </p>
        <div class="img-container"></div>
      </bl-card>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    "bl-card": Card,
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 16px 16px;

  // margin-top: 80px;
}

.main-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.main-card {
  grid-column: span 2;
}

@media screen and (min-width: 768px) {
  main {
    margin: 80px 16px;
  }

  .main-card:not(:nth-of-type(1)) {
    grid-column: span 1;
  }
}
</style>
