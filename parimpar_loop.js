function verificar() {
    let numero = parseInt(document.getElementById('numero').value);
    const resposta = document.getElementById('resposta');

  

        if (numero == 0) {
            resposta.textContent = "Número inválido"
        }
        else { do {
                numero -=2;

    } while (numero >= 2);
}
    if (numero == 1) {
        resposta.textContent = `O número é Ímpar`;
    } else {
        resposta.textContent = `O número é Par`;
    }
}
