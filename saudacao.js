function saudacao() {
    let data = new Date();
    let hora = data.getHours();
    const saudacao = document.getElementById('saudacao');
    
    if (hora >= 12 && hora < 18) {
        saudacao.textContent = "Boa Tarde!";
    } else if(hora > 18) {
        saudacao.textContent = "Boa noite!";
    } else {
        saudacao.textContent = "Bom dia!";
    }
}