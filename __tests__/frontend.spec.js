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

    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('Ventanilla Electrónica de la Administración de la Junta de Andalucía - Inicio');
    });

    test('Browse to the form', async () => {
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
    });
    // test('Check the form exists', async () => {
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     const chidFrameUrl = childFrame._url;
    //     expect(chidFrameUrl).toContain("http://10.140.88.83/medioambiente/ctr_form-vea-ptw-externo/vea/inicio");

    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const subChidFrameUrl = subChildFrame._url;
    //     expect(subChidFrameUrl).toContain("http://10.140.88.83/medioambiente/sira-form-AITR/datosPrevios");
    // });
    // test('Check form main menu', async () => {
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     const mainMenuItems = ['Datos previos', 'Datos generales', 'Datos específicos', 'Documentación y declaración'];
    //     const mainMenuLength = await childFrame.evaluate('document.querySelectorAll("a > div > label").length');
    //     expect(mainMenuLength).toBe(4);
    //     const mainMenuOption1 = await childFrame.evaluate('document.querySelectorAll("a > div > label")[0].innerText');
    //     expect(mainMenuOption1).toBe(mainMenuItems[0]);
    //     const mainMenuOption2 = await childFrame.evaluate('document.querySelectorAll("a > div > label")[1].innerText');
    //     expect(mainMenuOption2).toBe(mainMenuItems[1]);
    //     const mainMenuOption3 = await childFrame.evaluate('document.querySelectorAll("a > div > label")[2].innerText');
    //     expect(mainMenuOption3).toBe(mainMenuItems[2]);
    //     const mainMenuOption4 = await childFrame.evaluate('document.querySelectorAll("a > div > label")[3].innerText');
    //     expect(mainMenuOption4).toBe(mainMenuItems[3]);
    // });

    // test('Check type of elements - Checkbox', async () => {
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     const id = 'body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default';
    //     const expectedClass = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
    //     const elementClass = await subChildFrame.$eval(id, element => element.className);
    //     expect(elementClass).toBe(expectedClass);
    //     await subChildFrame.click('body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default');
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-active');
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default');
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default.ui-state-active');
        
    // });

    // test('Check type of elements - YES/NO', async () => {
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('#mat-button-toggle-2-button');
    //     const elementType = await subChildFrame.$eval('#mat-button-toggle-2-button', element => element.nodeName);
    //     expect(elementType).toBe("BUTTON");
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('#mat-button-toggle-3-button');
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('#mat-button-toggle-2-button');
    //     await new Promise(resolve =>  setTimeout(resolve, 2000));
    //     await subChildFrame.click('#mat-button-toggle-3-button');
    // });

    // test('Check type of elements - Text', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 5000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input';
    //     await subChildFrame.type(id, 'test');
    //     const elementType = await subChildFrame.$eval(id, element => element.type);
    //     expect(elementType).toBe("text");
    // });

    // test('Check type of elements - Select Combo', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div:nth-child(4) > div > ng-select > div > div > div.ng-input > input[type=text]';
    //     const elementType = await subChildFrame.$eval(id, element => element.getAttribute('role'));
    //     expect(elementType).toBe("combobox");
    // });

    // test('Check elements - Attributes - Max Length', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input';
    //     const elementType = await subChildFrame.$eval(id, element => element.maxLength);
    //     expect(elementType).toBe(255);
    // });

    // test('Check elements - Attributes - Tooltip', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input';
    //     const elementType = await subChildFrame.$eval(id, element => element.getAttribute('ng-reflect-message'));
    //     expect(elementType).toBe('Indique el nombre/razón social');
    // });

    // test('Check warning messages - Nombre correcto', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input';
    //     await subChildFrame.type(id, '-');
    //     const id2 = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(3)';
    //     await subChildFrame.click(id2);
    //     const warning = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > div > p';
    //     let elementType = await subChildFrame.$eval(warning, element => element.innerText);
    //     expect(elementType).toBe('Introduce un nombre correcto');
    // });

    // test('Check warning messages - Dato Obligatorio', async () => {
    //     const datosGenerales = 'body > app-root > app-home-vea > mat-sidenav-container > mat-sidenav > div > mat-nav-list > app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label';
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     await childFrame.click(datosGenerales);
    //     await new Promise(resolve =>  setTimeout(resolve, 10000));
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const id = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input';
    //     await subChildFrame.type(id, '-');
    //     const id2 = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(3)';
    //     await subChildFrame.click(id2);
    //     const warning2 = 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(6) > div > div.p-field.p-col.col-3.g-height-margin > div > div > p';
    //     elementType = await subChildFrame.$eval(warning2, element => element.innerText);
    //     expect(elementType).toBe('Obligatorio');
    // });

    test('Check an element is not present', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await new Promise(resolve =>  setTimeout(resolve, 10000));
        const subChildFrame = await childFrame.childFrames()[0];
        const obligatorio = await childFrame.evaluate('document.querySelector("body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > div > p")');
        expect(obligatorio).toBe(null);
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

