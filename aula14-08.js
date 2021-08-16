var nome = "Fulana";
console.log(nome + " é maravilhosa!");
console.log(`${nome} é maravilhosa!`)

// Operadores aritméticos---------------------------------------------------------------------------------------------
var soma = 10 + 5;
    sub = 10 - 5;
    div = 10 / 5;
    mult = 10 * 5;
    modulo = 10 % 5;
    expo = 10 ** 5;

    console.log(soma, sub, div, mult, modulo, expo);

// Média-------------------------------------------------------------------------------------------------------------
var nota1 = 10;
var nota2 = 4;

var media = (nota1 + nota2) / 2;
console.log("Sua média foi de " + media + " pontos.");

// Cálculo de IMC-----------------------------------------------------------------------------------------------------
var peso = 46;
var altura = 1.65;

var imc = peso / (altura**2); // ou Math.pow(nomeDaVar, expoente)
console.log(`IMC de ${imc.toFixed(2)}`); //.toFixed(x) serve para escolher quantas casas decimais.

//Operadores unários e ordem de procedência---------------------------------------------------------------------------
var first_number = 10;
    second_number = 20;
    third_number = 30

    first_number--
    console.log(first_number);

    second_number++
    console.log(second_number);
    
    ordemProcedencia = 5 + ++third_number;
    console.log(ordemProcedencia);

// Operadores de atribuição------------------------------------------------------------------------------------------
var a = 30;
    b = 20;

    mais = a+=b;
    menos = a-=b;
    vezes = a*=b;
    divisao = a/=b;
    resto = a%=b;
    //entre outros...
    console.log(mais, menos, vezes, divisao, resto);    

// Operadores ternários e operadores relacionais---------------------------------------------------------------------
var n1 = 50;
    n2 = 100;

    solução1 = n1 > n2 ? 'Sim, é maior' : 'Não, é menor';
    console.log(solução1);
    solução2 = n1 < n2 ? 'Sim, é menor' : 'Não, é maior';
    console.log(solução2);
    // outros: >=, <=, ==, !=, ===, !==....

// Média com mensagem-------------------------------------------------------------------------------------------------
var notaProva = 7;
var notaTeste = 5;

var mediaFinal = (notaProva + notaTeste) / 2;
console.log("Sua média foi de " + mediaFinal + " pontos.");

var resultadoFinal = mediaFinal >= 6 ? 'aprovada!' : 'reprovada!';
console.log(`Você foi ${resultadoFinal}`);

// Comparação---------------------------------------------------------------------------------------------------------
var nome1 = "Maria";
    nome2 = "João";

    comparador = nome1 == nome2 ? "é igual" : "não é igual"; //Lembrando que == não confere a tipagem, quem confere é ===
    console.log(`A string ${nome1} ${comparador} a string ${nome2}.`);                  // ou seja, 3 == '3' -> true
                                                                                       //           3 === '3' -> false

// Operadores lógicos &&, || e !--------------------------------------------------------------------------------------
var idade = 20;

var verificador = (idade >= 16 && idade <= 18) || (idade > 60) ? 'meia entrada' : 'inteira';
console.log(`Você vai pagar ${verificador}.`);
