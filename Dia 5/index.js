let conteudo = document.getElementById("compras")
let hortifruti = []
let laticinios = []
let padaria = []
let confeitaria = []
let congelados = []
let acougue = []

function iniciar(){
    conteudo.innerHTML = "<label> Insira o item desejado: </label>"
    conteudo.innerHTML += "<input type='text' id='resposta' onfocus='this.value=``'>"

    conteudo.innerHTML += "<div id='itens'><label for='comidas'> Indique o tipo do alimento escolhido: </label>"
    conteudo.innerHTML += "<select id='comidas'><option value='Hortifruti'>Hortifrúti🍉</option><option value='laticinios'>Laticínios🥛</option><option value='padaria'>Padaria🍞</option><option value='confeitaria'>Confeitaria🍰</option><option value='congelados'>Congelados🥡</option><option value='acougue'>Açougue🍗</option></select></div>"

    conteudo.innerHTML += "<button onclick=enviar() id='controle'>Adicionar no carrinho</button>"
    conteudo.innerHTML += "<div ><button onclick='finalizar()' id='controle'>Finalizar compras</button></div>"
}

function enviar(){
    let select = document.getElementById('comidas')
    let value = select.options[select.selectedIndex].value
    let resposta = document.getElementById('resposta')


    switch(value){
        case 'Hortifruti':
            hortifruti.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        case 'laticinios':
            laticinios.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        case 'padaria':
            padaria.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        case 'confeitaria':
            confeitaria.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        case 'congelados':
            congelados.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        case 'acougue':
            acougue.push(resposta.value)
            alert('Item adicionado com sucesso!')
            break
        default:
            conteudo.innerHTML = "<label> Insira um item válido! </label>"
            break
    }
}

function finalizar(){
    conteudo.innerHTML = "<label for='comidas'> Itens comprados: </label>"
    
    conteudo.innerHTML += "<br><label > Hortifrúti: </label>"
    if(hortifruti.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<hortifruti.length;i++){
            conteudo.innerHTML += `${hortifruti[i]}, `
        }
    }

    conteudo.innerHTML += "<br><label > Laticínios: </label>"
    if(laticinios.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<laticinios.length;i++){
            conteudo.innerHTML += `${laticinios[i]}, `
        }
    }

    conteudo.innerHTML += "<br><label > Padaria: </label>"
    if(padaria.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<padaria.length;i++){
            conteudo.innerHTML += `${padaria[i] }, `
        }
    }

    conteudo.innerHTML += "<br><label > Confeitaria: </label>"
    if(confeitaria.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<confeitaria.length;i++){
            conteudo.innerHTML += `${confeitaria[i] }, `
        }
    }

    conteudo.innerHTML += "<br><label > Congelados: </label>"
    if(congelados.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<congelados.length;i++){
            conteudo.innerHTML += `${congelados[i] }, `
        }
    }

    conteudo.innerHTML += "<br><label > Açougue: </label>"
    if(acougue.length == 0){
        conteudo.innerHTML += `Sem itens adicionados`
    }else{
        for(let i=0;i<acougue.length;i++){
            conteudo.innerHTML += `${acougue[i] }, `
        }
    }
    
}

                
                
                
                
                