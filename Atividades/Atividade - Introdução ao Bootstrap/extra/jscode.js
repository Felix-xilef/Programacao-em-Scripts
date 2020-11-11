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
    <div class="row">
        <a href="${volta}index.html" class="btn col txtBranco">Página Inicial</a>
        <a href="${extra}biblioteca.html" class="btn col txtBranco">Biblioteca de Temas</a>
        <a href="https://genshin.mihoyo.com/en" class="btn col txtBranco">Site Oficial</a>
        <a href="https://www.youtube.com/c/GenshinImpact" class="btn col txtBranco">YouTube - Genshin Impact</a>
    </div>`);

    $('footer').html(`
    <h4>Mapa</h4>
    <a class="alert-link" href="${volta}index.html">Página Inicial</a> | <a class="alert-link" href="${extra}biblioteca.html">Biblioteca de Temas</a>
    <hr>
    <p>Copyright&copy; 2012-2020 miHoYo ALL RIGHTS RESERVED</p>
    <p>Icons made by <a class="alert-link" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a class="alert-link" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>`);
    $('footer').addClass('rounded');
}