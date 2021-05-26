const puppeteer = require('puppeteer');

(async function main(){
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321', {waitUntil: 'domcontentloaded'});
        
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        console.log('done');
        await browser.close();
    } catch (e) {
        console.log('Err', e);
    }
})();