const numeros = []

function armazenar(){
    const numero = parseFloat(document.getElementById('numero_recebido').value);

    if(!isNaN(numero)){
    numeros.push(numero)
   
    }
   document.getElementById('numero_recebido').value = '';

}

function resultado(){

    if(numeros.length> 0){
    const menor = Math.min(...numeros)
    document.getElementById('menor_numero').textContent = `o menor número digitado foi... ${menor}`;
    }
    else{
        document.getElementById('menor_numero').textContent = 'Nenhum número foi armazenado';
    }
}

function reiniciar(){
    numeros.splice(0, numeros.length)
    document.getElementById('numero_recebido').value = '';
    document.getElementById('menor_numero').textContent = '';
}