// Estrutura condicional IF/ELSE--------------------------------------------------------------------------
var nota1, nota2, media;

nota1 = 4;
nota2 = 4;

media = ( nota1 + nota2 ) / 2;

// status = media >= 7 ? 'Aprovada' : 'Reprovada';   <-- ternário

if (media >= 7 && media <= 10) {
    console.log(`Sua média foi ${media} e você está aprovada.`);
} else if (media >= 5 && media < 7) {
    console.log(`Sua média foi ${media} e você está de recuperação.`);
} else {
    console.log(`Sua média foi ${media} e você está reprovada.`)
}

// Cálculo do IMC com if/else
var peso = 77
var altura = 1.60

var calculoIMC = peso / ( altura**2 )

if ( calculoIMC < 18.5 ) {        // comando para casas decimais
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}, você está abaixo do peso.`)
} else if ( calculoIMC >= 18.5 && calculoIMC <= 24.9) {
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}, você está no peso normal.`)
} else if ( calculoIMC >= 25.0 && calculoIMC <= 29.9) {
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}, você está acima do peso ideal.`)
} else {
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}, você está com obesidade.`)
}    


// Estrutura condicional SWITCH/CASE----------------------------------------------------------------------
var letra = "U";

switch (letra) {
    case "A" :
        console.log('Anne')
        break
    case "E" :
        console.log('Elena')
        break
    case "I" :
        console.log('Iara')
        break
    case "O" :
        console.log('Otávia')
        break
    case "U" :
        console.log('Utica')
        break
    default:
        console.log(`Letra ${letra} não é uma vogal.`)
}

// Switch case + if
var pessoa = "Z";
var numero = 9;

switch (pessoa) {
    case "X" :
        numero++;
        console.log('PessoaX', numero)
        break
    case "Z" :
    case "Y" :
        if(numero < 10) {
            numero = numero + 2
        }
        console.log('PessoaYouZ', numero)
        break
    default:
        console.log('Pessoa não listada.')
}

// Pedido de restaurante com switch case + if/else
var code = 106
var quantidade = 2
var total

switch (code) {
    case 100 :
        total = 1.20 * quantidade
        console.log(`Seu pedido de cachorro quente custa ${total} reais.`)
        break
    case 101 :
        total = 1.30 * quantidade
        console.log(`Seu pedido de bauru simples custa ${total} reais.`)
        break
    case 102 :
        total = 1.50 * quantidade
        console.log(`Seu pedido de bauru com ovo custa ${total} reais.`)
        break
    case 103 :
        total = 1.20 * quantidade
        console.log(`Seu pedido de hamgurger custa ${total} reais.`)  
        break
    case 104 :
        total = 1.30 * quantidade
        console.log(`Seu pedido de cheeseburger custa ${total} reais.`)
        break
    case 105 :
        total = 1.50 * quantidade
        console.log(`Seu pedido de refrigerante custa ${total} reais.`)
        break
    case 106 :
    case 107 :
        total = 2.50 * quantidade
        if (code == 106) {
            console.log(`Vc pediu o item 106 e deu ${total} reais.`)
        } else {
            console.log(`Vc pediu o item 107 e deu ${total} reais.`)
            }
        break    
    default :
        console.log('Código inválido.')              
}


// Repetição com FOR--------------------------------------------------------------------------------------
var contador

for (contador = 0; contador <= 10; contador ++) {
    console.log(`Agora o número é ${contador}.`)
}

// for + operador lógico
for (x = 2; (x <= 10 && x == 2); x++) {
    console.log(x)
}

// for + if
for( var count = 10; count <= 200; count++) {
    if (count % 18 == 0) {
    console.log(`O número divisível por 18 entre 10 e 200 é ${count}.`)
    }
}

// for + if + break
for( var i = 10; i <= 200; i++) {
    if ( i % 18 == 0 ) {
        console.log(`O primeiro número divisível por 18 entre 10 e 200 é ${i}.`)
        break
    } // ou apenas return console.log, que funciona como um break definitivo
}

// for + decremento + if + break
for ( var index = 200; index >= 10; index--) {
    if(index % 18 == 0){
        console.log(`O ultimo número divisível por 18 entre 10 e 200 é ${index}.`)
        break
    }
} 

// for + if + continue
for ( var k = 1; k <= 10; k++) {
    if (k != 4) {
        if(k % 2 == 0){
            console.log(`Os números divisíveis por 2, entre 1 e 10, ignorando o 4 é ${index}.`)
        }
        continue
    }    
}  

for (var indice1 = 10; indice1 > 0; indice1--) {
    console.log(indice1)
    if (indice1 == 5) {
        break
    }
}

for (var indice2 = 10; indice2 > 0; indice2--) {
    console.log(indice2)
    if (indice2 == 5) {
        continue
    }
}


// While---------------------------------------------------------------------------------------------------

// No while, diferente do for, vc não sabe quantas vezes o bloco vai rodar.

var contador = 0

while (contador <= 10) {
    console.log(contador)
    contador++
}

// O while so irá executar se a condição for verdade.
// Do + while garante que será executado pelo menos uma vez, mesmo se for false.

var numero1 = 0

do {
    console.log(numero1) 
        numero1++
} while(numero1 <= 10)


