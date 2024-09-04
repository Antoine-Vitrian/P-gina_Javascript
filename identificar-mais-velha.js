const pessoas = [];

function adicionarPessoa(array, contador = 0) {
    if (array.length == 5) {
        return;
    }
    
    const qtdPessoasDisplay = document.getElementById('quantidade-pessoas');
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const resposta = document.getElementById('resposta');
    let pessoa = {nome: nome, idade: idade};
    
    qtdPessoasDisplay.textContent = `Quantidade de pessoas: ${++contador}`;
    if (array.length > 0) {
        array.forEach((person) => {
            if(pessoa.nome === person.nome && pessoa.idade === person.idade) {
                resposta.textContent = "Inclua outra pessoa";
                return;
            }
        });
    }
    
}

function identificarMaisVelho(array) {
    const menorIdade = array.reduce((menor, objAtual) => {
        return objAtual.idade < menor ? objAtual.idade : menor;
    }, array[0].idade);
    alert(menorIdade);
}