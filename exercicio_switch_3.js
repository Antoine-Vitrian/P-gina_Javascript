function IdentificarRank(){
let rank = document.getElementById('rank')
const pontuacao = parseInt(document.getElementById('pontuacao').value);
const resposta = document.getElementById('resposta');


switch(true){
case pontuacao>999:
rank="mestre";

break;
case pontuacao>=500 :
rank="avancado";

break;
case pontuacao>=200:
rank="intermediario";

break;
case pontuacao>=0:
rank="iniciante";

break;
default:
rank="valor invalido"
}

resposta.textContent=rank


}