
let soma;

function somarArray(){
    let numero = [];
    const resposta = document.getElementById('resposta');
    numero.push(parseInt(document.getElementById('number').value));
    numero.push(parseInt(document.getElementById('number2').value));
    numero.push(parseInt(document.getElementById('number3').value));
    const soma = numero.reduce((accumulator, currentValue) => accumulator + currentValue);
    ;

    resposta.textContent = `Soma igual à ${soma}`;
}
