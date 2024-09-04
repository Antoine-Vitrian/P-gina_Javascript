function checarPalindromo() {
    const palavra = document.getElementById('palavra').value;
    const resposta = document.getElementById('resposta');
    let letras = [];
    let letrasReverse = [];

    for(let i = 0;i < palavra.length;i++) {
        letras.push(palavra[i]);
    }
    letrasReverse = letras.slice().reverse();
    const palavraInvertida = letrasReverse.join('');

    if (palavra === palavraInvertida) {
        resposta.textContent = "Sua palavra é um palíndromo!";
    } else {
        resposta.textContent = "Sua palavra não é um palíndromo!";
    }
}