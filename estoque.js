let estoque = [];
let texto = [];

function adicionarItem(array, text) {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    
    let item = {
        nome: nome,
        preco: preco,
        id: Math.random()
    }
    while(array.forEach(itemEstocado => {
        if(itemEstocado.id === item.id) {
            return true;
        } else {
            return false;
        }
    })) {
        item.id = Math.random();
    }
    array.push(item);

    posicao = text.length;
    text.push(`nome: ${item.nome}; preço: ${item.preco}. <button onclick="removerItem(estoque, texto, ${item.id})">Remover</button> <br><br>`);
    document.getElementById('items').innerHTML = text;
}

function removerItem(array, text, id) {
    let index = array.findIndex(item => item.id === id)

    array.splice(index, 1);
    text.splice(index, 1);
    document.getElementById('items').innerHTML = text;
}