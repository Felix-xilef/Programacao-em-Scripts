/**
 * Implementa o cabeçalho e o rodapé da página
 * @param {boolean} dentroExtra True caso o arquivo atual esteja na pasta extra
 */
function loadHeaderAndFooter(dentroExtra){
    let extra, volta;
    if (dentroExtra) {
        volta = '../';
        extra = '';
    } else {
        volta = '';
        extra = 'extra/';
    }

    $('header').html(`
    <div class="row">
        <div class="col">
            <img src="${extra}imagens/logo.png" alt="" class="img-fluid mx-auto d-block">
        </div>
    </div>
    <hr>
    <div class="row">
        <a href="${volta}index.html" class="btn col text-white btn-outline-dark">Página Inicial</a>
        <a href="${extra}quemSomos.html" class="btn col text-white btn-outline-dark">Quem Somos</a>
        <a href="${extra}servicos.html" class="btn col text-white btn-outline-dark">Serviços</a>
        <a href="${extra}cadastro.html" class="btn col text-white btn-outline-dark">Cadastro</a>
    </div>`);

    $('footer').html(`
    <h4>Mapa</h4>
    <a class="alert-link" href="${volta}index.html">Página Inicial</a> | <a class="alert-link" href="${extra}quemSomos.html">Quem Somos</a> | <a class="alert-link" href="${extra}servicos.html">Serviços</a> | <a class="alert-link" href="${extra}cadastro.html">Cadastro</a>
    <hr>
    <p>&copy; Staccato - Coding Studio ALL RIGHTS RESERVED</p>
    <p>Icons made by <a class="alert-link" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a class="alert-link" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>`);
    $('footer').addClass('rounded-top');
}

$(function(){
    $('.carousel-control-prev').on('click', function(){
        $('.carousel').carousel('prev');
    });

    $('.carousel-control-next').on('click', function(){
        $('.carousel').carousel('next');
    });

    $('.slide0').on('click', function(){
        $('.carousel').carousel(0);
    });

    $('.slide1').on('click', function(){
        $('.carousel').carousel(1);
    });

    $('.slide2').on('click', function(){
        $('.carousel').carousel(2);
    });
});