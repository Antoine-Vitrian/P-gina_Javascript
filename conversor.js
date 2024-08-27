function conversao() {
    const real = document.getElementById("real").value;
    const dolares = parseFloat(5.49);
    const euros = parseFloat(6.14);
    const libra_esterlinas = parseFloat(7.26);
    const franco_suicos = parseFloat(6.48);
    const moeda = document.getElementById("moedas").value;
    const convertido = document.getElementById("conversao");
    let conversao;
    let final;

    switch (moeda) {
        case "dolar":
            conversao = real/dolares;
            final = conversao.toFixed(2);
            convertido.textContent = `R$${real} é igual a ${final} Dólares.`;
            break;
        case "euro":
            conversao = real/euros;
            final = conversao.toFixed(2);
            convertido.textContent = `R$${real} é igual a ${final} Euros.`;   
            break;
        case "libra_esterlina":
            conversao = real/libra_esterlinas;
            final = conversao.toFixed(2);
            convertido.textContent = `R$${real} é igual a ${final} Libras esterlinas.`;
            break;
        default:
            conversao = real/franco_suicos;
            final = conversao.toFixed(2);
            convertido.textContent = `R$${real} é igual a ${final} Francos suiços.`;
            break;
    }

}
