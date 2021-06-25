const path = require('path');
const puppeteer = require('puppeteer');
const GLOBAL = require('../__mocks__/global.mocks.js');
const ELEMENTS = require('../__mocks__/elements.js');

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
        expect(title).toBe(ELEMENTS.page_title);
    });

    test('Browse to the form', async () => {
        await page.waitForSelector(ELEMENTS.vea_calidad_ambiental);
        await page.click(ELEMENTS.vea_calidad_ambiental);
        await page.waitForTimeout(5000);
        await page.waitForSelector(ELEMENTS.aut_inst_tratamiento_residuos);
        await page.click(ELEMENTS.aut_inst_tratamiento_residuos);
        await page.waitForTimeout(5000);
        await page.click(ELEMENTS.nueva_solicitud);
        await page.waitForTimeout(5000);
        await page.type(ELEMENTS.nif, ELEMENTS.nif_example);
        await page.waitForTimeout(5000);
        await page.click(ELEMENTS.iniciar_solicitud);
        await page.waitForTimeout(5000);
        await page.click(ELEMENTS.no_volver_a_mostrar);
        await page.waitForTimeout(5000);
        await page.click(ELEMENTS.iniciar);
        await page.waitForTimeout(10000);
    });

    test('Check the form exists (main iframe)', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        const chidFrameUrl = childFrame._url;
        expect(chidFrameUrl).toContain(ELEMENTS.iframes.main);
    });

    test('Check the form exists 2 (first childframe)', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        const subChildFrame = await childFrame.childFrames()[0];
        const subChidFrameUrl = subChildFrame._url;
        expect(subChidFrameUrl).toContain(ELEMENTS.iframes.child);
    });

    test('Check form main menu. Datos previos', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.waitForSelector(ELEMENTS.menu.datos_previos.id);
        let datosPrevios = await childFrame.$eval(ELEMENTS.menu.datos_previos.id, element => element.innerText);
        expect(datosPrevios).toBe(ELEMENTS.menu.datos_previos.text);
    });
    test('Check form main menu. Datos generales', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.waitForSelector(ELEMENTS.menu.datos_generales.id);
        let datosPrevios = await childFrame.$eval(ELEMENTS.menu.datos_generales.id, element => element.innerText);
        expect(datosPrevios).toBe(ELEMENTS.menu.datos_generales.text);
    });
    test('Check form main menu. Datos específicos', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.waitForSelector(ELEMENTS.menu.datos_especificos.id);
        let datosPrevios = await childFrame.$eval(ELEMENTS.menu.datos_especificos.id, element => element.innerText);
        expect(datosPrevios).toBe(ELEMENTS.menu.datos_especificos.text);
    });
    test('Check form main menu. Documentación y declaración', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.waitForSelector(ELEMENTS.menu.documentacion_y_declaracion.id);
        let datosPrevios = await childFrame.$eval(ELEMENTS.menu.documentacion_y_declaracion.id, element => element.innerText);
        expect(datosPrevios).toBe(ELEMENTS.menu.documentacion_y_declaracion.text);
    });

    // test('Check an element is not present', async () => {
    //     const childFrame = await page.mainFrame().childFrames()[0];
    //     const subChildFrame = await childFrame.childFrames()[0];
    //     const obligatorio = await childFrame.evaluate('document.querySelector("body > app-root > app-datos-previos > form > div > div > div.row-cabecera-2 > div.row.col-12.jc-space.p-m-unset > div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > div > p")');
    //     expect(obligatorio).toBe(null);
    // });

    test('Check type of elements - Checkbox', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        const subChildFrame = await childFrame.childFrames()[0];
        await page.waitForTimeout(10000);
        const expectedClass = 'ui-chkbox-box ui-widget ui-corner-all ui-state-default';
        const elementClass = await subChildFrame.$eval(ELEMENTS.rnp, element => element.className);
        expect(elementClass).toBe(expectedClass);
    });

    test('Check type of elements - YES/NO', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        const subChildFrame = await childFrame.childFrames()[0];
        // await page.waitForTimeout(2000);
        const elementType = await subChildFrame.$eval(ELEMENTS.yes_no_1, element => element.nodeName);
        expect(elementType).toBe("BUTTON");
    });

    test('Check type of elements - Text', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        const elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.nombre.id, element => element.type);
        expect(elementType).toBe("text");
    });

    test('Check type of elements - Select Combo', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        const elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.sexo.id, element => element.getAttribute('role'));
        expect(elementType).toBe("combobox");
    });

    test('Check elements - Attributes - Max Length', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        const elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.nombre.id, element => element.maxLength);
        expect(elementType).toBe(255);
    });

    test('Check elements - Attributes - Tooltip', async () => {

        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        const elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.nombre.id, element => element.getAttribute('ng-reflect-message'));
        expect(elementType).toBe('Indique el nombre/razón social');
    });

    test('Check warning messages - Nombre correcto', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        await subChildFrame.type(ELEMENTS.datos_generales.nombre.id, '-');
        await subChildFrame.click(ELEMENTS.body);
        let elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.nombre.warning, element => element.innerText);
        expect(elementType).toBe('Introduce un nombre correcto');
    });

    test('Check warning messages - Dato Obligatorio', async () => {
        const childFrame = await page.mainFrame().childFrames()[0];
        await childFrame.click(ELEMENTS.menu.datos_generales.id);
        await page.waitForTimeout(5000);
        const subChildFrame = await childFrame.childFrames()[0];
        await subChildFrame.type(ELEMENTS.datos_generales.nombre.id, '-');
        await subChildFrame.click(ELEMENTS.body);
        elementType = await subChildFrame.$eval(ELEMENTS.datos_generales.tipo_de_via.warning, element => element.innerText);
        expect(elementType).toBe('Obligatorio');
    });
    
});

afterAll(async () => {
    await page.close();
    await browser.close();
  })

