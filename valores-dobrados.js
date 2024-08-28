const resposta = document.getElementById("resposta");
let arrayInicial;

function atualizarArray() {
    const num1 = parseInt(document.getElementById("num1").value) || 0;
    const num2 = parseInt(document.getElementById("num2").value) || 0;
    const num3 = parseInt(document.getElementById("num3").value) || 0;
    return [num1, num2, num3];
}
document.getElementById("attArray").addEventListener('click', () => {
    arrayInicial = atualizarArray();
});

function dobrarArray(array) {
    let array2 = array.map(value => value * 2);
    return array2;
}
document.getElementById('acaoDobrar').addEventListener('click', () => {
    let arrayDobrada = dobrarArray(arrayInicial);
    resposta.textContent = "Sua nova array dobrada: " + arrayDobrada;
});