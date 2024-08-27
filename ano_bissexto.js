function bissexto() {
    const ano = parseInt(document.getElementById("ano").value);
    const resposta = document.getElementById("resposta");

    if (ano % 4 == 0 || ano % 400 == 0) {
        resposta.textContent = "Este ano é bissexto";
    } else if(ano % 100 == 0 && ano % 400 != 0){
        resposta.textContent = "O ano não é bissexto!";
    } else {
        resposta.textContent = "O ano não é bissexto!";
    }

}