function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const resposta = document.getElementById("resposta");

    switch (false) {
        case /[A-Z]/.test(senha):
            resposta.textContent = "É necessário um caractere maiúsculo";
            break;
        case /\d/.test(senha):
            resposta.textContent = "É necessário um número";
            break;
        case /[!@#$%^&*(),.?":{}|<>]/.test(senha):
            resposta.textContent = "É necessário um caractere especial";
            break;
        case senha.length >= 8:
            resposta.textContent = "É necessário 8 dígitos.";
            break;
        default:
            resposta.textContent = "Sua senha é válida";
            break;
    }
}

//Primeira tentativa
    /*let temMaiusculo = false;
    let temNum = false;
    let temEspecial = false;
    let temOitoDigitos = false;

    for (let i = 0; i < senha.length; i++) {
        let char = senha[i];
        switch (true) {
            case /[A-Z]/.test(char):
                temMaiusculo = true;
                break;
            case /\d/.test(char):
                temNum = true;
                break;
            case /[!@#$%^&*(),.?":{}|<>]/.test(char):
                temEspecial = true;
                break;
            case i >= 7:
                temOitoDigitos = true;
                break;
        }
    }
    switch (false) {
        case temMaiusculo:
            resposta.textContent = "É necessário um caractere maiúsculo";
            break;
        case temNum:
            resposta.textContent = "É necessário um número";
            break;
        case temEspecial:
            resposta.textContent = "É necessário um caractere especial";
            break;
        case temOitoDigitos:
            resposta.textContent = "É necessário no mínimo 8 dígitos"
            break;
        default:
            resposta.textContent = "a senha é válida";
            break;
    }
}*/