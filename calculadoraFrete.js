function calcularFrete() {
    const peso = parseFloat(document.getElementById("peso").value);
    const regiao = document.getElementById("regiao").value;
    const resposta = document.getElementById("resposta");

    let  valorFrete;
    let categoriaPeso = Math.floor(peso / 5);

    switch (regiao) {
        case 'norte':
            switch (categoriaPeso) {
                case 0:
                    valorFrete = 15;
                    break;
                case 1:
                    valorFrete = 25;
                    break;
            }
            break;
        case 'centro-oeste':
            switch (categoriaPeso) {
                case 0:
                    valorFrete = 10;
                    break;
                case 1:
                    valorFrete = 20;
                    break;
            }
            break;
        case 'sul':
            switch (categoriaPeso) {
                case 0:
                    valorFrete = 12;
                    break;
                case 1:
                    valorFrete = 22;
                    break;
            }
            break;
    }
    resposta.textContent = `o frete é R$${valorFrete}`;
}