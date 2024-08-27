function IdentificarRank(){
    let rank = document.getElementById('rank')
    const pontuacao = parseInt(document.getElementById('pontuacao').value);
    const resposta = document.getElementById('resposta');
    
    
    switch(true){
    case pontuacao>999:
    rank="Mestre";
    
    break;
    case pontuacao>=500 && pontuacao<999 :
    rank="Avançado";
    
    break;
    case pontuacao>=200 && pontuacao<500:
    rank="Intermediario";
    
    break;
    case pontuacao>=0 && pontuacao<200:
    rank="Iniciante";
    
    break;
    default:
    rank="Valor inválido!"
    }
    
    resposta.textContent=rank
    
    
    }