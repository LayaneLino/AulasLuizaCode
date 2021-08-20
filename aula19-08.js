// Função -------------------------------------------------------------------------------------------

function parOuImpar (number) {
    return (number % 2) == 0 ? 'par' : 'impar'
} 
console.log(`Esse numero é ${parOuImpar(10)}.`)
/*  ou var number = X
    console.log(`O numero ${number} é ${parOuImpar(number)}.`) */


                        // numero substituto
function somar (numeroSoma, numero2Soma=10) {
    return numeroSoma + numero2Soma
}
var numeroSoma = 20
console.log(`O resultado da soma é ${somar(numeroSoma)}.`)
// vem no lugar do substituto caso vc queira
console.log(`O resultado da soma é ${somar(numeroSoma, 30)}.`)


// Arrow function
var subtrair = (numeroSub, numero2Sub=10) => {
    return numeroSub - numero2Sub
}
var numeroSub = 20
console.log(`O resultado da subtração é ${subtrair(numeroSub)}.`)



// Variáveis var, let e const---------------------------------------------------------------------------------------------------------
var comVar = function() {
    msg = 'Variável com var'
    console.log(msg)
    var msg // mesmo declarada depois, funciona
}
comVar()
// ou seja, var é global, pode ser enxergada de qualquer lugar, podendo ser imprimida/modificada em qualquer momento

var comLet = function() {
    if(true) {
        var msg1 = 'Frase da var'
        let msg2 = 'Frase da let'

        console.log(msg1, msg2) // exibe ambas
    }
    //console.log(msg1, msg2) ---> exibe apenas a var, a let dá erro
}
comLet()
// ou seja, let só pode ser chamada dentro do escopo em que foi declarada, e pode ser modificada em qualquer momento


var comConst = function() {
    const mensagem = 'Frase da const'
    console.log(mensagem)
    //mensagem = 'mundando a const' ----> da erro
}
comConst()
//console.log(mensagem) -----> da erro tbm
// ou seja, const não pode ser modificada, além de também só obedecer onde foi declarada


// var = pode ser chamada e modificada em qualquer momento
// let = pode ser modificada porém só pode ser chamada dentro do lugar onde foi declarada
// const = não pode ser modificada e só pode ser chamada dentro do lugar onde foi declarada


// Métodos para strings e numeros--------------------------------------------------------------------------------------------------
let texto = '18.99'
let paraNumero = parseFloat(texto) // transforma a string em number
console.log(paraNumero)
console.log(typeof(paraNumero)) // para checar o tipo da variavel

let text = '15.95'
console.log(parseInt(text)) // ignorou o tipo de string e já transformou em inteiro

let text2 = 19.999999
console.log(text2.toFixed(2)) // ajeita as casas decimais e ja arredonda caso necessário

var umNome = 'Taina'
console.log(umNome.length) // mostra quantas letras tem

console.log(isNaN(umNome)) // de fato não é um numero
console.log(isNaN(text)) // por mais que seja em string, é sim um numero
console.log(isNaN(text2)) // é sim um número


var frase = "BLABLA uma frase aleatoria blabla"
console.log(frase.indexOf('aleatoria')) // mostra o índice onde a palavra começa

var aleatoria = frase.slice(17, 26) // vê oq está ocupando esses indices
console.log(aleatoria)

console.log(frase.toUpperCase()) // coloca a string toda em maiúsculo

console.log(frase.toLocaleLowerCase()) // coloca a string toda em minúsculo

console.log(frase.split(" ")) // entende que é pra isolar aquilo que esta separado por espaço

console.log(frase.lastIndexOf("blabla")) // vê o índice da ultima palavra repetida

var cortando = "              abc"
console.log(cortando.trim()) // ignora espaços


// Métodos para array------------------------------------------------------------------------------------------------------
var pizza = ['frango', 'carne', 'vegano']
var numeros = [1, 2, 3, 4, 5]

console.log(numeros.length) // quantos itens existem na array

numeros.push(6) // push adiciona itens no final da array
console.log(numeros)

numeros.pop() // retira o ultimo item da array
console.log(numeros) 
numeros.pop()
console.log(numeros)

numeros.unshift(0) // adiciona itens no inicio da array
console.log(numeros)

numeros.shift() // retira o primeiro item da array
console.log(numeros)
numeros.shift()
console.log(numeros)

numeros.splice(2, 0, 5) // 1° indica o indice que vc quer adicionar o item, 2° se quer retirar ou não quem já está lá, 3° quem vc quer colocar naquele indice
console.log(numeros)
numeros.splice(2, 1)
console.log(numeros)

console.log(numeros.indexOf(3)) // a posição em que o item está na erray

console.log(numeros.reverse()) // inverte as posições dos itens da array

console.log(numeros[0]) // para escolher o item que está no indice informado

console.log(numeros.join(', ')) // coloca a array em formato de string separada por aquilo que vc quiser

