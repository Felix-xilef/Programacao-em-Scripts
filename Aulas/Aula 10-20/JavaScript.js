//JavaScript com código externo (arquivo js)
alert('Olá Mundo! (externo)');
/*
function recebeCor() {
    
}*/

function mudacor(color) {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    document.getElementById('corSel').value = color;
}