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
    text.push(`<div class="item">nome: ${item.nome}; preço: ${item.preco}. <button onclick="removerItem(estoque, texto, ${item.id})">Remover</button></div>`);
    document.getElementById('items').innerHTML += text[text.length - 1];
}

function removerItem(array, text, id) {
    let itemsDisplay = document.getElementById('items');
    let index = array.findIndex(item => item.id === id)

    array.splice(index, 1);
    itemsDisplay.innerHTML = itemsDisplay.innerHTML.replace(text[index], '');
    text.splice(index, 1);
}