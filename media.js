function media() {
    const prova_1 = parseInt(document.getElementById('prova_1').value);
    const prova_2 = parseInt(document.getElementById('prova_2').value);
    const prova_3 = parseInt(document.getElementById('prova_3').value);
    const prova_4 = parseInt(document.getElementById('prova_4').value);
    const resposta = document.getElementById("resposta");

    let media = (prova_1 + prova_2 + prova_3 + prova_4) / 4;

    if(media >= 7) {
        resposta.innerHTML = `Sua média é ${media}. Status: Aprovado`; 
    }
    else if(media >= 5 && media < 7) {
        resposta.innerHTML = `Sua média é ${media}. Status: Recuperação`;
    }
    else {
        resposta.innerHTML =`Sua média é ${media}. Status: Reprovado`; 
    }
}