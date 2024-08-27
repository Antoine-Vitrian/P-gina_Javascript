const minNum = 1;
const maxNum = 10;
const resposta = Math.floor(Math.random() * maxNum - minNum + 1) + 1;

function sorteador() {
    const guess = parseInt(document.getElementById("guess").value);
    const print = document.getElementById("print");

    if (guess == resposta) {
        print.textContent = "Parabêns! Você acertou!";
    } 
    else {
        print.textContent = `Tente novamente! O número era ${resposta}`;
    }
}
