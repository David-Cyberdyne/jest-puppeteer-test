module.exports = {
    page_title: 'Ventanilla Electrónica de la Administración de la Junta de Andalucía - Inicio',
    vea_calidad_ambiental: '#contenido > div > div > div > div.cuerpoDiv.af_panelGroupLayout > div:nth-child(3) > div > div.elementoACentrar.af_panelGroupLayout > a',
    aut_inst_tratamiento_residuos: '#tramites > div:nth-child(2) > div.elementoACentrar.af_panelGroupLayout > a',
    nueva_solicitud: '#btnPresentacionSolicitud',
    nif: '#nif',
    nif_example: '00000000T',
    iniciar_solicitud: '#botonLocalizador',
    no_volver_a_mostrar: '#boton_ocultar_AdvCrearBorrador',
    iniciar: '#j_id180 > div > div:nth-child(2) > div > span > a',
    iframes: {
        main: 'http://10.140.88.83/medioambiente/ctr_form-vea-ptw-externo/vea/inicio',
        child: 'http://10.140.88.83/medioambiente/sira-form-AITR/datosPrevios'
    },
    menu: {
        datos_previos: {
            id:'app-menu-list-item.col.pl-pr-unset.ng-tns-c6-2.ng-star-inserted > a > div > label',
            text: 'Datos previos'
        },
        datos_generales: {
            id:'app-menu-list-item.col.pl-pr-unset.ng-tns-c6-3.ng-star-inserted > a > div > label',
            text: 'Datos generales'
        },
        datos_especificos: {
            id:'app-menu-list-item.col.pl-pr-unset.ng-tns-c6-4.ng-star-inserted > a > div > label',
            text: 'Datos específicos'
        },
        documentacion_y_declaracion: {
            id:'app-menu-list-item.col.pl-pr-unset.ng-tns-c6-5.ng-star-inserted > a > div > label',
            text: 'Documentación y declaración'
        }
    },
    nombre_del_centro_obligatorio: 'div.p-field.p-col.col-8.g-height-margin.pt-unset > div > p',
    rnp: 'div.col-5.br-2.f-left > div.row.row-4-1 > div:nth-child(1) > p-checkbox > div > div.ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default',
    yes_no_1: '#mat-button-toggle-2-button',
    datos_generales: {
        nombre: {
            id: 'div:nth-child(4) > div > div.p-field.col-4.g-height-margin > input',
            warning: 'div.p-field.col-4.g-height-margin > div > p'
        },
        sexo: {
            id: 'div:nth-child(4) > div > div:nth-child(4) > div > ng-select > div > div > div.ng-input > input[type=text]'
        },
        tipo_de_via: {
            warning: 'div:nth-child(6) > div > div.p-field.p-col.col-3.g-height-margin > div > div > p'
        }
    },
    body: 'body > app-root > datos-generales > form > div > div > div.form-datos > div:nth-child(3)'
}