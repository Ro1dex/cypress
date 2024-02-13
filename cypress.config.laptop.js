const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  viewportWidth: 1366,
  viewportHeight: 768,
});

//npx cypress run --config-file cypress.config.laptop.js
