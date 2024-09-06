const resposta = document.getElementById("resposta");
let elementos = [];

function addElemento() {
    const nomeElemento = document.getElementById("nomeElementos").value;
    return nomeElemento;
}
document.getElementById("add").addEventListener('click', () => {
    elementos.push(addElemento());
});

function contarElementos(array) {
    return array.length;
}
document.getElementById("contar").addEventListener('click', () => {
    resposta.textContent = `A array possui ${contarElementos(elementos)} elementos.`
});

document.getElementById("mostrar").addEventListener('click', () => {
    document.getElementById("mostrarArray").innerHTML = elementos;
});