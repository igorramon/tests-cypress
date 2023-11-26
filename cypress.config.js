const { defineConfig } = require("cypress")

module.exports = defineConfig({
    projectId: "9454du",
    e2e: {
        baseUrl: "https://notes-serverless-app.com",
        env: {
            viewportWidthBreakpoint: 768,
        },
        chromeWebSecurity: false,
        defaultCommandTimeout: 5000,
        requestTimeout: 6000,
        setupNodeEvents(on, config) {
            require("@cypress/grep/src/plugin")(config)
            return config
        },
    },
})
