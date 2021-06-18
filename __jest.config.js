module.exports = {
    preset: "jest-puppeteer",
    globals: {
      URL: "https://www.correosfilatelia.com/",
      URL2: "https://www.correosfilatelia.com/category/noticias-en-medios-de-comunicacion/page/274/"
    },
    testMatch: [
      "**/test/**/*.test.js"
    ],
    verbose: true
}