/**
 * Define o background do body
 * @param {string} [back=#fff] - Código CSS do background a ser definido (default = '#fff')
 */
function backgroundChange(back='#fff') {
    let body = document.getElementsByTagName('body')[0];
    body.style.background = back;
    body.style.backgroundSize = 'cover';
}

function selecionar() {
    for (let radio of document.getElementsByName('selecao')) {
        let radioClass = document.getElementsByClassName(radio.className);
        if (radio.checked == true) {
            radioClass[1].hidden = false;
        } else {
            radioClass[1].hidden = true;
        }
    }
}

function gradientePadrao() {
    backgroundChange('linear-gradient(to right, rgb(85, 0, 0), rgb(170, 0, 0), rgb(255, 0, 0), rgb(255, 85, 0), rgb(255, 170, 0), rgb(255, 255, 0), rgb(170, 255, 0), rgb(85, 255, 0), rgb(0, 255, 0), rgb(0, 255, 85), rgb(0, 255, 170), rgb(0, 255, 255), rgb(0, 170, 255), rgb(0, 85, 255), rgb(0, 0, 255), rgb(85, 0, 255), rgb(170, 0, 255), rgb(255, 0, 255))');
}

function corSolida() {
    backgroundChange(document.getElementById('colorCorSolida').value);
}

function gradienteDuplo() {
    let aux = document.getElementsByName('tipoGradient');
    if (aux[0].checked == true) {
        aux = 'no-repeat fixed linear-gradient(';
    } else if (aux[1].checked == true) {
        aux = 'linear-gradient(to right, ';
    } else {
        aux = 'no-repeat fixed radial-gradient(';
    }

    let coloPicker = document.getElementsByName('colorGradiente');
    backgroundChange(`${aux}${coloPicker[0].value}, ${coloPicker[1].value})`);
}

function esconderMostrar() {
    let btn = document.getElementById('btnEsconder');
    let div = document.getElementById('divMain');
    if (btn.value == 'Esconder Opções') {
        div.hidden = true;
        btn.value = 'Mostrar Opções';
    } else {
        div.hidden = false;
        btn.value = 'Esconder Opções';
    }
}

function imgBackground() {
    backgroundChange(`no-repeat fixed center url(${document.getElementById('urlImage').value})`);
}