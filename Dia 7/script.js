let operacao = document.getElementById('operacao')
let resultado = document.getElementById('resultado')
let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')

let tipoOperacao
let final

function somar(){
    operacao.innerHTML = '<label>+</label>' 
    tipoOperacao = 1
}

function subtrair(){
    operacao.innerHTML = '<label>-</label>' 
    tipoOperacao = 2
}

function dividir(){
    operacao.innerHTML = '<label>/</label>' 
    tipoOperacao = 3
}

function multiplicar(){
    operacao.innerHTML = '<label>x</label>' 
    tipoOperacao = 4
}

function calcular(){
    switch(tipoOperacao){
        case 1:
            resultado.innerHTML = `<label>${parseInt(valor1.value) + parseInt(valor2.value)}</label>`
            break;
        case 2:
            resultado.innerHTML = `<label>${parseInt(valor1.value) - parseInt(valor2.value)}</label>`
            break;
        case 3:
            resultado.innerHTML = `<label>${parseInt(valor1.value)/parseInt(valor2.value)}</label>`
            break;
        case 4:
            resultado.innerHTML = `<label>${parseInt(valor1.value) * parseInt(valor2.value)}</label>`
            break;
        default:
            resultado.innerHTML = '<label>Digite um número válido!</label>'
    }
}