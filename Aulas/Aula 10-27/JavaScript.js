/**** Verificar se o documento está pronto: ****/
/* completo:
$(document).ready(function(){
    alert('Olá, Mundo!');
}); */

/* abreviado:
$(function(){
    alert('Olá, Mundo!');
}); */

/****************** Seletores ******************/
/* tag:
$(function(){
    $('nomeTag').//funcção em JQuery
}); */

/* id:
$(function(){
    $('#nomeId').//funcção em JQuery
}); */

/* classe:
$(function(){
    $('.nomeClasse').//funcção em JQuery
}); */

/*************** Manipulador CSS ***************/
/*
$(function(){
    $(this).css({
        'nomeAtributoCSS': 'valorAtributoCSS',
        'nomeAtributoCSS': 'valorAtributoCSS'
    });

    $(this).css('nomeAtributoCSS', 'valorAtributoCSS');
}); */

//Exemplos
$(function(){
    $('div').css({
        'width': '500px',
        'margin-right': 'auto',
        'margin-left': 'auto'
    });

    $('.pPar').css({
        'width': '200px',
        'margin-right': 'auto',
        'margin-left': 'auto'
    });

    $('#btnClique').css('font-size', '20px');
});

/******************* Eventos *******************/
/*
$(function(){
    $('nomeSeletor').evento(function(){

    });
}); */

//Exemplos
$(function(){
    $('div').on('mouseover', function(){
        alert('Oiii!');
    });
    
    $('.pPar').on('mouseout', function(){
        alert('tchau!');
    });
    
    $('#btnClique').on('click', function(){
        alert('Ai!');
    });
});