function gorjeta() {
    const valor = parseInt(document.getElementById("valor").value);
    const satisfacao = document.getElementById("satisfacao").value;
    const resposta = document.getElementById("resposta");
    const gorjetaBom = parseFloat(0.10);
    const gorjetaOtimo = parseFloat(0.15);
    const gorjetaExcelente = parseFloat(0.20);

    // const satisfacaoSelecionada = satisfacao.value;
    
    let valorTotal;
    let valorGorjeta;
    
    if (satisfacao == "10") {
        valorGorjeta = valor*gorjetaBom; 
        
    } else if(satisfacao == "15") {
        valorGorjeta = valor*gorjetaOtimo;

    } else {
        valorGorjeta = valor*gorjetaExcelente;
    }

    valorTotal = valor+valorGorjeta;
    resposta.textContent = `Sua conta total ficou ${valorTotal}, incluindo a gorjeta de ${valorGorjeta}`;
}