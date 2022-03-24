let content = document.getElementById("content");

function Respostas(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let linguagem = document.getElementById("linguagem").value;

    content.innerHTML = `<h2 id="texto">Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</h2>`
    content.innerHTML += `<label id="texto-label">Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO</label>`
    content.innerHTML += `<input type="text" id="pergunta" class="texto-input"> <button onclick=linguagem()>Enviar</enviar>`
  
}

function linguagem(){
    let pergunta = parseInt(document.getElementById("pergunta").value);

    switch (pergunta) {
        case 1:
            content.innerHTML = "<h2 id='texto'>Muito bom! Continue estudando e você terá muito sucesso.</h2>"
            break;
        case 2:
            content.innerHTML = "<h2 id='texto'>Ahh que pena... Já tentou aprender outras linguagens?</h2>"
            break;
        default:
            content.innerHTML = "<h2 id='texto'>Digite um número válido!</h2>"
            break;
    }
}