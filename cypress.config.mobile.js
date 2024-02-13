const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  viewportWidth: 375,
  viewportHeight: 667
});

//npx cypress run --config-file cypress.config.mobile.js


  