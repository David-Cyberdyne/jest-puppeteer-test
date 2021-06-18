const path = require('path');
const puppeteer = require('puppeteer');
const GLOBAL = require('../__mocks__/global.mocks.js');

let page, browser;

jest.setTimeout(160000);

beforeAll(async () => {
    browser = await puppeteer.launch(GLOBAL.launch);
    page = await browser.newPage();
    await page.goto(GLOBAL.URL_JUNTA, {'timeout': 60000, 'waitUntil':'networkidle0'});
});

describe('Test header and title of the page', () => {

    
    // test('Accept cookies', async () => {
    //     await page.waitForSelector('#paqCookies > div.paqCookiesWrapper > div > div > div.col-md-12.paqCookiesBtsCont > a.paqCookiesAcceptAllBt');
    //     await page.click('#paqCookies > div.paqCookiesWrapper > div > div > div.col-md-12.paqCookiesBtsCont > a.paqCookiesAcceptAllBt');
    //     const html = await page.evaluate('document.getElementById("#paqCookies > div.paqCookiesWrapper > div > div > div.col-md-12.paqCookiesBtsCont > a.paqCookiesAcceptAllBt")');
    //     // console.log(await page.cookies());
    //     expect(html).toBe(null);
    // });
    

    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('Ventanilla Electrónica de la Administración de la Junta de Andalucía - Inicio');
    });

    test('Browse to the path', async () => {
        await page.waitForSelector('#contenido > div > div > div > div.cuerpoDiv.af_panelGroupLayout > div:nth-child(3) > div > div.elementoACentrar.af_panelGroupLayout > a');
        await page.click('#contenido > div > div > div > div.cuerpoDiv.af_panelGroupLayout > div:nth-child(3) > div > div.elementoACentrar.af_panelGroupLayout > a');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#tramites > div:nth-child(2) > div.elementoACentrar.af_panelGroupLayout > a');
        await page.click('#tramites > div:nth-child(2) > div.elementoACentrar.af_panelGroupLayout > a');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#btnPresentacionSolicitud');
        await page.click('#btnPresentacionSolicitud');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#nif');
        await page.type('#nif', '00000000T');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#botonLocalizador');
        await page.click('#botonLocalizador');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#boton_ocultar_AdvCrearBorrador');
        await page.click('#boton_ocultar_AdvCrearBorrador');
        await new Promise(resolve =>  setTimeout(resolve, 5000));
        await page.waitForSelector('#j_id180 > div > div:nth-child(2) > div > span > a');
        await page.click('#j_id180 > div > div:nth-child(2) > div > span > a');
        await new Promise(resolve =>  setTimeout(resolve, 20000));
        let iframes = await page.frames();
        console.log('----------------- Número de iframes', iframes.length);
        iframes.forEach(element => {
            console.log('NOMBRES', element._url);
        });
        const frame = await page.mainFrame();
        console.log('++++++++++++++++++++++', frame._url);
        const childFrame = await page.mainFrame().childFrames()[0];
        console.log('++++++++++++++++++++++', childFrame._url);
        const subChildFrame = await childFrame.childFrames()[0];
        console.log('++++++++++++++++++++++', subChildFrame._url);
        const inicio = await childFrame.$eval("a[class*='mat-list-item active primaryLevel'] > div > label", element => element.innerHTML);
        console.log(inicio);
        const inicio2 = await subChildFrame.$eval("body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.form-check.pt-5 > label", element => element.innerHTML);
        console.log(inicio2);
        // expect(inicio).toBe("Datos previos");
    });

    
    // test('Header of the page', async () => {
    //     // const h1Handle = await page.$('#f7d6');
    //     // const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);
    //     const inicio = await page.$eval('#menu-item-207 > a', element => element.innerHTML);
    //     const noticias = await page.$eval('#menu-item-117 > a', element => element.innerHTML);
    //     const reverso = await page.$eval('#menu-item-2608 > a', element => element.innerHTML);
    //     const leido = await page.$eval('#menu-item-118 > a', element => element.innerHTML);
    
    //     expect(inicio).toBe("Inicio");
    //     expect(noticias).toBe("Noticias Redacción Filatelia");
    //     expect(reverso).toBe("El reverso del Sello");
    //     expect(leido).toBe("Leído en Prensa");
    // });

    // test('Target newly opened page', async () => {
    //     await page.goto(GLOBAL.URL2, {'timeout': 60000, 'waitUntil':'networkidle0'});
    //     const pageTarget = page.target();
    //     await page.click('#post-338 > div > div > a');
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     let pages = await browser.pages();
    //     const a = await pages[2].title();
    //     expect(a).toBe('Correos emite 3 tarjetas postales con reclamos de Soria - SoriaNoticias');
    // });

    // test('Submit form with valid data', async () => {
    //     await page.click('[href="/login"]');
        
    //     await page.waitForSelector('form');
    //     await page.type('#name', 'Rick');

    //     await page.type('#password','szechuanSauce');
    //     await page.type('#repeat_password','szechuanSauce');

    //     await page.click('[type="submit"]');
    //     await page.waitForSelector('.success');
    //     const html = await page.$eval('.success', el => el.innerHTML);

    //     expect(html).toBe('Successfully signed up!');
    // });

    // test('Take screenshot of home page', async () => {
    //     await page.setViewport({ width: 1920, height: 1080 });
    //     await page.screenshot({
    //         path: path.resolve(GLOBAL.screenshotsPath + '/home.jpg'),
    //         fullpage: true,
    //         type: 'jpeg'
    //     });
    // });
    
});

// afterAll(async () => {
//     await page.close();
//     await browser.close();
//   })

