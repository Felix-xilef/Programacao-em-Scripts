function selecionar() {
    for (let radio of document.getElementsByName('selecao')) {
        let radioClass = document.getElementsByClassName(radio.className);
        if (radio.checked == true) {
            radioClass[1].hidden = false;
            if (radio.className == 'gradientePadrao') {

            } else {
                
            }
        } else {
            radioClass[1].hidden = true;
        }
    }
}