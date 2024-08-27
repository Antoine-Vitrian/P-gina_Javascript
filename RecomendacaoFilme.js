function classificacao() {
    const idade = parseInt(document.getElementById("idade").value);
    const genero = document.getElementById('genero').value;

    switch(true){
        case (idade <=12):
        if (genero == 'animacao'){
            document.getElementById("recomendacao").textContent = 'Sua recomendação de filme é de: Toy Story'
        }
        else if (genero == 'aventura'){
            document.getElementById("recomendacao").textContent = 'Sua recomendação de filme é de: Maze Runner'
        }
        else{
            document.getElementById("recomendacao").textContent = 'Genero não disponivel para sua faixa etária!'
        }
        break;

        case(idade >=13 && idade <=17):
        if (genero == 'acao'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é: Velozes e furiosos'
        }
        else if(genero == 'drama'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é: As vantagens de ser invisiel'
        }
        else{
            document.getElementById('recomendacao').textContent = 'Recomendamos filmes de Ação e Drama para essa faixa etária'
        }
        break;

        case(idade >=18 && idade <=64):
        if(genero == 'comedia'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é: Superbad'
        }
        else if(genero == 'suspense'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é : Ilha do medo'
        }
        else (
            document.getElementById('recomendacao').textContent = 'Recomendamos filmes de Comédia e Suspense para essa faixa etária'
        )
        break;

        case(idade >=65):
        if(genero == 'romance'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é: Querido John'
        }
        else if(genero == 'documentario'){
            document.getElementById('recomendacao').textContent = 'Sua recomendação de filme é: Senna: O Brasileiro, O Herói, O Campeão'
        }
        else{
            document.getElementById('recomendacao').textContent = 'Recomendamos filmes de Romance e Documentário para a sua faixa etária'
        }
        break;



        
    }
}