function SaberTabuada(){
const numero = parseInt(document.getElementById('numero').value);
const resposta = document.getElementById('resposta');
let resultado = '';
let i=1
let tabuada = '';
do{

let multiplicacao=numero*i;
resultado = `${numero} * ${i} = ${multiplicacao} <br> `
i++


tabuada+=resultado
}while(i <= 10);
resposta.innerHTML = tabuada




}