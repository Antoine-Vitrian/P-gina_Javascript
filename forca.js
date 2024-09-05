const palavras = ["elefante", "montanha", "passaro", "jardineiro", "borboleta", "oceano", "camiseta", "telefone", "computador", "biblioteca"];
const palavra = palavras[Math.floor(Math.random() * 10)].toUpperCase();
let letrasjaChutadas = '';
let letrasErradas = '';
let letrasAcertadas = '';
let erros = 0;
const maxErros = 6;
const palavraDisplay = document.getElementById("palavra");

for(let i = 0; i < palavra.length; i++) {
    letrasAcertadas += '_';
}
palavraDisplay.textContent = letrasAcertadas;

let letraChutada;
function adicionarLetra(letra, id) {
    const letraId = document.getElementById(id);
    const head = document.getElementById("head");
    const leftArm = document.getElementById("leftArm");
    const rightArm = document.getElementById("rightArm");
    const body = document.getElementById("body");
    const leftLeg = document.getElementById("leftLeg");
    const rightLeg = document.getElementById("rightLeg");

    // checar se letra já foi chutada
    if (letraId.style.background == "gray") {
        return;
    }

    // se letra não foi chutada anteriormente
    letraChutada = letra.toUpperCase();
    letraId.style.background = "gray";

    // se a letra estiver na palavra
    if (palavra.includes(letraChutada)) {
        // procurando posição da letra certa
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[i].toUpperCase() === letraChutada) {
                letrasAcertadas = letrasAcertadas.substring(0, i) + letraChutada + letrasAcertadas.substring(i + 1);
                palavraDisplay.textContent = letrasAcertadas;
            }
        }
    } else {
        const letrasErradasDisplay = document.getElementById("letrasErradas");
        letrasErradas += letraChutada + ' ';
        letrasErradasDisplay.textContent = `Letras erradas: ${letrasErradas}`;
        erros++;
    }

    // checar se o usuário venceu ou perdeu
    if (letrasAcertadas === palavra) {
        const parabensWindow = document.getElementById("parabens");
        parabensWindow.style.display = "flex";

    }
    if (erros === maxErros) {
        const gameOverWindow = document.getElementById("gameOver");
        const palavraSecreta = document.getElementById("palavraSecreta");
        gameOverWindow.style.display = "flex";
        palavraSecreta.textContent = `A palavra era: ${palavra}`;
    }

    // montar o boneco
    switch (erros) {
        case 6:
            rightLeg.style.display = "block";
        case 5:
            leftLeg.style.display = "block";
        case 4:
            rightArm.style.display = "block";
        case 3:
            leftArm.style.display = "block";
        case 2:
            body.style.display = "block";
        case 1:
            head.style.display = "block";
            break;
    }
}