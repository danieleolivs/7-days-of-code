let newDiv = document.getElementById("perguntas");

function rota1(){
    
    newDiv.innerHTML = "<label>Que legal!! que área você linguagem você quer aprender?📚</label>"
    newDiv.innerHTML += "<div class='button'>"
    newDiv.innerHTML += "<button onclick='especialização()'>C#</button>"
    newDiv.innerHTML += "<button onclick='especialização()'>Java</button>"
    newDiv.innerHTML += "</div>"

    
}

function rota2(){
    
    newDiv.innerHTML = "<label>Que legal!! que área você linguagem você quer aprender?📚</label>"
    newDiv.innerHTML += "<div class='button'>"
    newDiv.innerHTML += "<button onclick='especialização()'>React</button>"
    newDiv.innerHTML += "<button onclick='especialização()'>Vue</button>"
    newDiv.innerHTML += "</div>"
    
}

function especialização(){
    
    newDiv.innerHTML = "<label>O que você pretende fazer?🔎</label>"
    newDiv.innerHTML += "<div class='button'>"
    newDiv.innerHTML += "<button onclick='continuar()'>Seguir na área</button>"
    newDiv.innerHTML += "<button onclick='fullstack()'>Me tornar fullstack</button>"
    newDiv.innerHTML += "</div>"
}

function continuar(){
    
    newDiv.innerHTML = "<label>Que demais! Sempre bom conhecer mais das linguagens estudadas.🎉</label>"
    newDiv.innerHTML += "<div class='button'>"
    newDiv.innerHTML += "<button onclick='linguagens()'>Continuar as perguntas</button>"
    newDiv.innerHTML += "</div>"
}

function fullstack(){
    
    newDiv.innerHTML = "<label>Que demais! Aprender várias coisas diferentes sobre as áreas de front-end e back-end.🎉</label>"
    newDiv.innerHTML += "<div class='button'>"
    newDiv.innerHTML += "<button onclick='linguagens()'>Continuar as perguntas</button>"
    newDiv.innerHTML += "</div>"
}

function linguagens(){
    
    newDiv.innerHTML = "<label>Quais linguagens você deseja se aprofundar ou conhecer? Digite a vontade!😊</label>"
    newDiv.innerHTML += "<input type='text' id='adiciona-respostas' onfocus='this.value=``'>"
    newDiv.innerHTML += "<button onclick='respostas()'>Adicionar</button>"
    newDiv.innerHTML += "<button onclick='finalizar()'>Finalizar</button>"
    newDiv.innerHTML += "<div id='respostas'></div>"

}

function respostas(){
    let respostas = document.getElementById("adiciona-respostas");
    let divRespostas = document.getElementById("respostas")

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id","linguagens")

    divRespostas.appendChild(newDiv)

    newDiv.innerHTML += `<p> ${respostas.value} </p>`
    
}

function finalizar(){
    newDiv.innerHTML = `<label>Fico muito feliz do seu interesse em programação! Continue estudando e se dedicando 💜✨</labe>`
}