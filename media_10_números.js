const resposta = document.getElementById("resposta");
let nums = [];
let counter = 0;

document.getElementById("addNum").addEventListener('click', () => {
    let num = parseInt(document.getElementById("num").value);
    if (!isNaN(num) && counter != 10) {
        nums.push(num);
        counter++
        document.getElementById("numsDigitados").textContent = `Números digitados: ${counter}.`
    } else if(conter == 10) {
        alert("Você já digitou 10 números");
    } else {
        alert('Por favor insira um número válido.')
    }
});

function conseguirMedia(array) {
    if(array.length === 0) {
        return 0;
    }

    let soma = 0;
    for(let i = 0; i < array.length; i++) {
        soma += array[i]; 
    }
    return soma / array.length;
}
document.getElementById('gerarMedia').addEventListener('click', () => {
    resposta.textContent = `A média é: ${conseguirMedia(nums)}.`;
});