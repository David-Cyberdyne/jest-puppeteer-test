module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}