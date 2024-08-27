function verificarRecomendacao() {
    const temp = parseInt(document.getElementById("temp").value);
    const resposta = document.getElementById("resposta");

    switch (true) {
        case temp < 15:
            resposta.textContent = "Recomendo usar um casaco e luvas.";
            break;
        case temp >= 15 && temp <= 25:
            resposta.textContent = "Recomendo usar uma Jaqueta e um cachecol.";
            break;
        default:
            resposta.textContent = "Recomendo usar uma camiseta e um chapéu.";
            break;
    }
}

