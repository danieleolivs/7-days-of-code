let conteudo = document.getElementById("conteudo")
numeroAleatorio = Math.floor(Math.random()*10);
let chances = 3

function jogar(){
    conteudo.innerHTML = "<label>Que bom que você aceitou! a única regra do jogo é você escolher um número entre 0 a 10 e digitar, para que adivinhe o meu número da sorte escolhido, entendido?🤗</label>"
    conteudo.innerHTML += "<button onclick=iniciar()>Entendi!</button>"
}

function iniciar(){
    conteudo.innerHTML = "<label>🤫 Escolhe um número e digite: </label>"
    conteudo.innerHTML += "<input type='text' id='resposta'>"
    conteudo.innerHTML += "<button onclick=respostas()>Enviar</button>"
    conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/star-pergunta.jpg'></div>"

}

function respostas(){
    divResposta = document.getElementById("resposta").value
    resposta = parseInt(divResposta)

    if(resposta>=0 && resposta<=10){
        if(resposta == numeroAleatorio){
            conteudo.innerHTML = `<label>Parabéns, você acertou, o número escolhido era ${numeroAleatorio}🎉</labe>`
            conteudo.innerHTML += "<button onclick=iniciar()>Jogar novamente</button>"
            conteudo.innerHTML += "<button onclick=mensagemFinal()>Terminar</button>"
            conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/star-resposta.png'></div>"
        }else{
            chances--
            for(let i=chances;i>0;i--){
                conteudo.innerHTML = `<label>Opps, resposta errada! você tem mais ${chances} chances.😓</labe>`
                conteudo.innerHTML += "<button onclick=iniciar()>Jogar novamente</button>"
                conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/star-errado.png'></div>"
            }

            if(chances == 0){
                conteudo.innerHTML = `<label>Voce não conseguiu adivinhar, o número escolhido era ${numeroAleatorio}. 😥</labe>`
                conteudo.innerHTML += "<button onclick=iniciar()>Jogar novamente</button>"
                conteudo.innerHTML += "<button onclick=mensagemFinal()>Terminar</button>"
                conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/star-desistir.png'></div>"
            }

        }
    }else{
        conteudo.innerHTML = "<label>Digite um número válido!🤔</label>"
        conteudo.innerHTML += "<button onclick=iniciar()>Jogar novamente</button>"
        conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/numero-errado.png'></div>"
    }
    

}

function mensagemFinal(){
    conteudo.innerHTML = "<label>Obrigada por essa aventura, foi um prazer jogar com você!😊</label>"
    conteudo.innerHTML += "<div id='imagem-input'><img src='./public/assets/glossaryck-final.png'></div>"
}



function desistir(){
    conteudo.innerHTML = "<label>Volte para jogar quando estiver pronto!😊</label>"
    conteudo.innerHTML += "<div id='imagem-final'><img src='./public/assets/star-desistir.png'></div>"
}