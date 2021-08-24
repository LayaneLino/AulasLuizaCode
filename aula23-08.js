// Métodos matemáticos--------------------------------------------------------------------------------------
let maior = Math.max(13, 64, 01, 27) // informa o maior número dentre os citados
console.log(maior)

let menor = Math.min(13, 54, 01, 27) // informa o menor número dentre os citados
console.log(maior)
console.log(menor)

let arredondar = Math.round(3.12121212) // arredonda ou pra mais ou pra menos dependendo das casas desimais
let arredondar1 = Math.round(3.99999999)
console.log(arredondar, arredondar1)

let arredondarCima = Math.ceil(3.1212121) //arredonda sempre pra mais
console.log(arredondarCima)


// JS interativo no navegador--------------------------------------------------------------------------------
// let nome = prompt('Informe seu nome:')
// console.log(`Olá, ${nome}!`)

// let sobrenome = prompt('Informe seu sobrenome:')
// console.log(`Olá, ${nome + sobrenome}!`)

//alert('AAAAAAAAAAAAAAA')


// Média interativa------------------------------------------------------------------------------------------
const rLine = require('readline-sync') // no terminal, npm install readline-sync

const nome = rLine.question('Digite seu nome: '); // question, espera a entrada do usuário, grava e a retorna
console.log(`Olá, ${nome}!`)

const nota1 = rLine.questionFloat('Informe a primeira nota: \n'); // questionfloat espera um número
const nota2 = parseFloat(rLine.question('Informe a segunda nota: \n'));
const nota3 = parseFloat(rLine.question('Informe a terceira nota: \n'));

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7 && media <= 10) {
    console.log(`Sua média foi de ${media.toFixed(2)} pontos e você está aprovada.`)
} else if (media < 5) {
    console.log(`Sua média foi de ${media.toFixed(2)} e você está reprovada.`)
} else if (media > 10) {
    console.log('Informe notas reais.')
} else {
    console.log(`Sua média foi de ${media.toFixed(2)} e você está de recuperação.`)
}


// Célsius para Fahrenheit-----------------------------------------------------------------------------------
//const rLine = require('readline-sync') // require, ferramenta do node que importa/exporta módulos

function conversor(celsius){
    fahrenheit = 9 * celsius / 5 + 32
    console.log(`${celsius}° Celsius corresponde a ${fahrenheit.toFixed(2)}° Fahrenheit.`)
}
let temperatura = rLine.questionFloat('Informe a temperatura em Celsius: ');
conversor(temperatura)

let novaTemperatura = rLine.question('Informe a temperatura em Celsius: ')
conversor(novaTemperatura)

// ou
function converter(grausCelsius) {
    return 9 * grausCelsius / 5 + 32
}
let temp = rLine.questionFloat('Informe a temperatura em Celsius: ');
let resultado = converter(temp)
console.log(`${temp}° Celsius corresponde a ${resultado.toFixed(2)}° Fahrenheit.`)

