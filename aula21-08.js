// Modificando arays----------------------------------------------------------------------------------------------------------------------
const lista = ['Maria', 'João', 'José', 'Ana', 'Fulana']

function listagem(lista) {
    for (let i = 1; i <= lista.length; i++) {
        console.log(`${i}. ${lista[i-1]}`)
    }
}

console.log('Qual item você deseja excluir?')
listagem(lista);

const escolha = 4;
console.log(`R: Opção ${escolha}`);

lista.splice(escolha-1, 1);

console.log('Lista modificada:')
listagem(lista);


// Invertendo uma array sem o .reverse-----------------------------------------------------------------------------------------------------
let listaNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(listaNum)

let tamanho = listaNum.length - 1
let auxiliar

for (i = 0; i < listaNum.length / 2; i++) {
    auxiliar = listaNum[i]
    listaNum[i] = listaNum[tamanho]
    listaNum[tamanho] = auxiliar
    tamanho--
}
console.log(listaNum)


// Pedra, papel e tesoura-----------------------------------------------------------------------------------------------------------------
let player1 = 'papel'
let player2 = 'papel'

function jokenpo(player1, player2) {
    if (player1 == 'pedra' && player2 == 'papel')
        console.log(`${player2} ganhou.`)
    else if (player1 == 'papel' && player2 == 'pedra')
        console.log(`${player1} ganhou`)
    else if (player1 == 'tesoura' && player2 == 'pedra')
        console.log(`${player2} ganhou`)
    else if (player1 == 'pedra' && player2 == 'tesoura')
        console.log(`${player1} ganhou`)
    else if (player1 == 'tesoura' && player2 == 'papel')
        console.log(`${player1} ganhou`)
    else if (player1 == 'papel' && player2 == 'tesoura')
        console.log(`${player2} ganhou`)
    else
        console.log('Empate.')
}
jokenpo(player1, player2)


// Milésimo número primo--------------------------------------------------------------------------------------------------------------------
let primosEncontrados = 0
let dividendo
let ePrimo

for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
    ePrimo = true
    for (let divisor = 2; dividendo > divisor; divisor++) {
        if (dividendo % divisor == 0) {
            ePrimo = false
            break
        }
    }
    if (ePrimo == true) {
        primosEncontrados++
    }
}
console.log(`O 1001° número primo é ${--dividendo}.`)


// Posto de gasolina-----------------------------------------------------------------------------------------------------------------------
class Bomba {
    //atributos
    constructor(valorGasolina, capacidadeBomba) {
        this.valorGasolina = valorGasolina,
        this.capacidadeBomba = capacidadeBomba,
        this.gasolinaNaBomba = capacidadeBomba
    }
    // métodos
    encherBomba() {
        this.gasolinaNaBomba = 20
        if(this.gasolinaNaBomba == this.capacidadeBomba) {
            console.log('A bomba está cheia.')
        } else {
            this.gasolinaNaBomba = this.capacidadeBomba
            console.log('Enchendo a bomba.')
        }
    }
    abastecerCarro(litros) {
        if (this.gasolinaNaBomba >= litros) {
            this.gasolinaNaBomba -= litros
            console.log(`Abastecido com sucesso. O valor total foi de ${litros*this.valorGasolina} reais.`)
        } else {
            console.log(`Quantidade indisponível na bomba. Só restam ${this.gasolinaNaBomba} litros.`)
        }
        
    }
    ajustarValor(novoValor) {
        if (novoValor > 0 && typeof(novoValor) == 'number') {
            this.valorGasolina = novoValor
        } else {
            console.log('Valor não permitido.')
        }
    }
}

const bomba1 = new Bomba (10, 50)

bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(50)
bomba1.encherBomba()
bomba1.ajustarValor(0)


// Reajuste de salário----------------------------------------------------------------------------------------------------------------------
function reajusteSalarial(salario){
    let porcentagem

    if (salario <= 280) {
    porcentagem = 0.2

    } else if (salario <= 700) {
    porcentagem = 0.15
    
    } else if (salario <= 1500) {
    porcentagem = 0.10
    
    } else {
    porcentagem = 0.05
}

    let aumento = salario * porcentagem

console.log(
    `
    Salário atual: ${salario} reais,
    Percentual aplicado: ${porcentagem*100}%,
    Valor de oumento: ${aumento}
    Novo salário: ${salario + aumento}
    `
)
}

reajusteSalarial(280)
reajusteSalarial(700)
reajusteSalarial(1500)
reajusteSalarial(2000)


// Escrever data por extenso----------------------------------------------------------------------------------------------------------------
function conversor(data) {
    dia = data.substring(0,2)
    mes = parseInt(data.substr(3, 5))
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    ano = data.substring(6)
    console.log(`${dia} de ${meses[mes-1]} de ${ano}.`)
}
conversor('27/01/2003')

//ou
function conversor1(data) {
    let dataArray = data.split('/')
    dia = dataArray[0]
    meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    mes = parseInt(dataArray[1])
    ano = dataArray[2]
    console.log(`${dia} de ${meses[mes-1]} de ${ano}.`)
}
conversor1('23/08/2002')

//ou
let data = "22/04/1983";

let day = data.slice(0, 2);
let month = data.slice(3, 5);
switch (month) {
    case "01":
        month = "Janeiro";
    break;
    case "02":
        month = "Feveiro";
    break;
    case "03":
        month = "Março";
    break;
    case "04":
        month = "Abril";
    break;
    case "05":
        month = "Maio";
    break;
    case "06":
        month = "Junho";
    break;
    case "07":
        month = "Julho";
    break;
    case "08":
        month = "Agosto";
    break;
    case "09":
        month = "Setembro";
    break;
    case "10":
        month = "Outubro";
    break;
    case "11":
        month = "Novembro";
    break;
    case "12":
        month = "Dezembro";
    break;
    default: "0"
    break;
}
let year = data.slice(6);

let dataNovoFormato = `${day} de ${month} de ${year}.`
console.log(dataNovoFormato)

//ou
dataInserida = '16/06/2003';

const myArr = dataInserida.split("/");

dia = myArr[0];
ano = myArr[2];
let mess;

switch(myArr[1]){
    case '01':
        mess = 'janeiro';
        break;

    case '02':
        mess = 'fevereiro';
        break;

    case '03':
        mess = 'março';
        break;

    case "04":
        mess = 'abril';
        
        break;

    case "05":
        mess = 'maio';
        break;

    case '06':
        mess = 'junho';
        break;

    case '07':
        mess = 'julho';
        break;

    case '08':
        mess = 'agosto';
        break;

    case '09':
        mess = 'setembro';
        break;

    case '10':
        mess = 'outubro';
        break;
    case '11':
        mess = 'novembro';
        break;

    case '12':
        mess = 'dezembro';
        break;

    default:
        console.log("vazio");
        break;
}

console.log(`${dia} de ${mess} de ${ano}.`);

// ou
function convertDate (data) {
    let meses = [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro'
    ]
    let dataList = data.split('/')
    console.log(`${dataList[0]} de ${meses[parseInt (dataList[1]) - 1]} de ${dataList[2]}.`)
}

convertDate('12/10/2019')
