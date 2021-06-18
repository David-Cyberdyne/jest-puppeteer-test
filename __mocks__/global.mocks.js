module.exports = {
    URL: "https://www.correosfilatelia.com/",
    URL2: "https://www.correosfilatelia.com/category/noticias-en-medios-de-comunicacion/page/274/",
    URL_JUNTA: "http://10.140.88.44:8080/cmaot/vea-web/faces/vi/inicioOrganismo.xhtml",
    launch: {
        headless: false,
        // slowMo: 1000,
        devtools: false,
        args: [
            "--disable-web-security",
            "--disable-features=IsolateOrigins, site-per-process"
          ],
    },
    screenshotsPath: './__mocks__'
}