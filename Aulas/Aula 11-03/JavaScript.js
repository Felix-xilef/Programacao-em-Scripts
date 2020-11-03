/*if (confirm("Prosseguir?")) {
    document.write('Isso!');
}*/

/*aux = prompt('Diga:');
document.write(aux);*/

/*idade = eval(prompt('Idade:'));
document.write(`<h1>???${idade} anos???</h1>`);*/

let mes, aux = prompt('Digite a data (XX/XX/XXXX):').split('/');
switch (aux[1]) {
    case '01':
        mes = 'Janeiro';
        break;

    case '02':
        mes = 'Fevereiro';
        break;

    case '03':
        mes = 'Março';
        break;

    case '04':
        mes = 'Abril';
        break;

    case '05':
        mes = 'Maio';
        break;

    case '06':
        mes = 'Junho';
        break;

    case '07':
        mes = 'Julho';
        break;

    case '08':
        mes = 'Agosto';
        break;
    
    case '09':
        mes = 'Setembro';
        break;

    case '10':
        mes = 'Outubro';
        break;

    case '11':
        mes = 'Novembro';
        break;

    case '12':
        mes = 'Dezembro';
        break;

    default:
        mes = 'Slá';
}
document.write(`<h1 style="font: Arial;">${aux[0]} de ${mes} de ${aux[2]}</h1>`);