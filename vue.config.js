module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/_variables.scss";
          
        `,
      },
    },
  },
};
