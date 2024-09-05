const pessoas = [];

function adicionarPessoa(array) {
    if (array.length == 5) {
        return;
    }
    contador = 0
    const qtdPessoasDisplay = document.getElementById('quantidade-pessoas');
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const resposta = document.getElementById('resposta');
    let pessoa = {nome: nome, idade: idade};
    
    qtdPessoasDisplay.textContent = `Quantidade de pessoas: ${++contador}`;

    for(i = 0;i < array.length; i++) {
        if(pessoa.nome === array[i].nome && pessoa.idade === array[i].idade) {
            resposta.textContent = "Adicione pessoas diferentes.";
            return;
        }
    }
    array.push(pessoa);
}

function identificarMaisVelho(array) {
    const resposta = document.getElementById('resposta');
    
    if (array != 5) {
        resposta.textContent = "Adicione mais pessoas";
        return;
    }
    maiorIdade = array[0].idade;
    indexVelho = 0;
    for(i = 0;i < array.length;i++) {
        if (array[i].idade > maiorIdade) {
            indexVelho = i;
            maiorIdade = array[i].idade;
        }
    }
    resposta.textContent = `A pessoa mais velha é: ${array[indexVelho].nome}. Com ${maiorIdade} anos!`;
}

function mostrarPessoas(array) {
    if (array.length > 0) {
        let text;
        for(i = 0; i < array.length; i++) {
            text += `Nome: ${array[i].nome}, Idade: ${array[i].idade}.\n`;
        }
        document.getElementById("pessoas").textContent = text; 
    }
}