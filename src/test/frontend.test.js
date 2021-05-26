const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
},timeout);

describe('Test header and title of the page', () => {
    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('End-to-End testing with Puppeteer and Jest | by Jakub Zovak | Touch4IT | Medium');
        
    },timeout);

    test('Header of the page', async () => {
        // const h1Handle = await page.$('#f7d6');
        // const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
        const html = await page.$eval('#f7d6', el => el.innerHTML);
    
        expect(html).toBe("End-to-End testing with Puppeteer and Jest");
    }, timeout);

    test('Submit form with valid data', async () => {
        await page.click('[href="/login"]');
        
        await page.waitForSelector('form');
        await page.type('#name', 'Rick');

        await page.type('#password','szechuanSauce');
        await page.type('#repeat_password','szechuanSauce');

        await page.click('[type="submit"]');
        await page.waitForSelector('.success');
        const html = await page.$eval('.success', el => el.innerHTML);

        expect(html).toBe('Successfully signed up!');
    }, timeout);
});

