// Condicionais--------------------------------------------------------------------------------
var idade = 17;

if (idade >= 16) {
    console.log("Você pode votar!");
} else {
    console.log("Você não tem idade suficiente para votar.");
}
    

// Estrutura de repetição for------------------------------------------------------------------
var tabuada = 5;

for (var i = 0; i <= 10; i++) {
    console.log(tabuada + " x " + i + " = " + (tabuada * i));
}

// Estrutura de repetição while-----------------------------------------------------------------
var contagem = 0;

while (contagem < 20) {
    contagem += 5;
    console.log(contagem);
}

// Função---------------------------------------------------------------------------------------
function soma(operadorA, operadorB) {
    var resultado = operadorA + operadorB;
    return resultado;
} 

var resultadoDaSoma = soma(1, 2);
console.log(resultadoDaSoma);
var resultado2 = soma(10, 30);
console.log(resultado2);

function welcome(nome){
    console.log("Olá, " + nome + "! fique a vontade.");
}
welcome("Fulano");

// Classe---------------------------------------------------------------------------------------
class matematica {

    somatoria(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new matematica();

var result = instanciaMatematica.somatoria(4, 7);
console.log(result);

var result = instanciaMatematica.subtracao(5, 3);
console.log(result);

// Let e Template String------------------------------------------------------------------------
let meuNome = "Fulano";
let meuSobrenome = "Silva";
let profissao = "Testador profissional de gás oxigênio";

    //Sem template string:
console.log("Me chamo " + meuNome + " " + meuSobrenome + " e sou " + profissao + ".");
    //Com template string:
console.log(`Me chamo ${meuNome} ${meuSobrenome} e sou ${profissao}.`);

console.log(`O resultado de 1 + 1 é ${1 + 1}.`);

console.log(`Objeto json ${{chave: 'valor'}}`);

// Ternário--------------------------------------------------------------------------------------
let isValid = true;

    //Sem ternário
function verify(isValid) {
    if(isValid) {
        return true;
    } else {
        return false;
    }
}
console.log(verify(isValid));

    //Com ternário, a função ficaria simplesmente:
const ternario = isValid ? true : false;
console.log(ternario);

    // Lembrando que o ternário deve ser usado em estruturas simples como quando existem apenas duas condições
let num = 10;
const numResultado = num > 5 ? 'Sim' : 'Não';
console.log(numResultado);

// Arrow Functions------------------------------------------------------------------------------

    //Sem arrow functions:
function conta(x, y) {
    var solucao = x + y;
    return solucao;
}    
console.log(conta(10, 5));
    // ou...
const conta2 = function(a, b) {
    return a * b;
}    
console.log(conta2(5, 5));

    /*Com arrow functions:
const conta3 = (z, w) => { return z / w };  

const objeto = () => ({ nome: "Fulano", sobrenome: "Silva" });
return objeto; */

// Spread Operator-----------------------------------------------------------------------------

    //Sem spread:
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista, listaIncluir);

for(let i = 0; i < listaIncluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++
        }
    }
}
console.log(lista);

    //Com spread:
const listResult = [1, 2, ...listaIncluir, 5];
console.log(listResult);


let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

console.log(arr, arr2);

arr2.push('d');

console.log(`arr = ${arr}`);
console.log(`arr2 = ${arr2}`);

// Desestruct-----------------------------------------------------------------------------------
const pessoa = {
    primeiroNome: 'João',
    segundoNome: 'Souza',
    age: 30,
    trabalho: 'Procastinador'
};
console.log(pessoa);

    /*Sem desestruct, se você quisesse selecionar as informações, você teria que:

let primeiroNome = pessoa.primeiroNome;
let segundoNome = pessoa.segundoNome; etc....*/

    //Com desestruct, você pode apenas:
let {primeiroNome, segundoNome, age, trabalho} = pessoa;
console.log(primeiroNome, segundoNome, age, trabalho);

// Match-----------------------------------------------------------------------------------------
const cpf = 'Meu CPF é 123.456.910-11';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
console.log(cpf.match(regex));

