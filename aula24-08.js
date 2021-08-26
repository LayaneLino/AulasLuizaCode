// Expressões regulares (RegExp)--------------------------------------------------------------------------------

var regex = new RegExp('aula'); // criar um objeto passando termoQueQueroEncontrar
//ou
var outroRegex = /aula/
console.log(outroRegex.test("aula está maravilinda."))
console.log(outroRegex.test("dfghjkjhgf"))


const numero = /[01289]/ // verifica a existência de pelo menos um número
console.log(numero.test('Existe 1'))
console.log(numero.test('Não existe 5'))
console.log(numero.test('Existe 89'))
console.log(numero.test('Mais ou menos existe 51'))
console.log(numero.test('Mais ou menos existe 8 bsegb'))


const intervalo = /[0-5]/ // intervalo numérico
console.log(intervalo.test('Existe 1'))
console.log(intervalo.test('Não existe 8'))
console.log(intervalo.test('Existe 5'))
console.log(intervalo.test('Mais ou menos existe 51'))
console.log(intervalo.test('Mais ou menos existe 4 bsegb'))


const linha = /./ // qualquer caractere, menos nova linha
console.log(linha.test('a \n b'))
console.log(linha.test('\n'))


const numeros = /\d/ // verifica a presença de pelo menos 1 número
console.log(numeros.test('51'))
console.log(numeros.test('8 bsegb'))
console.log(numeros.test('asdfgh'))


const naoNumeros = /\D/ // não aceita a presença de apenas numeros
console.log(naoNumeros.test('51'))
console.log(naoNumeros.test('8 bsegb'))
console.log(naoNumeros.test('asdfgh'))


const espaco = /\s/ // verifica se existe espaço em branco
console.log(espaco.test('8 bsegb'))
console.log(espaco.test('asdfgh'))


const alfaNum = /\w/ // verifica caracteres dentro do alfa numérico
console.log(alfaNum.test('2'))
console.log(alfaNum.test('dgdfh'))
console.log(alfaNum.test('8 bsegb'))
console.log(alfaNum.test(' '))
console.log(alfaNum.test('@'))


const naoAlfaNum= /\W/ // verifica caracteres fora do alfa numérico
console.log(naoAlfaNum.test('51'))
console.log(naoAlfaNum.test('bsegb'))
console.log(naoAlfaNum.test('asdfgh  1'))
console.log(naoAlfaNum.test('@'))
console.log(naoAlfaNum.test(' '))


const circun = /[^aula]/ // ^ é o operador not, aceita tudo menos se estiver escrito apenas aquilo
console.log(circun.test('1'))
console.log(circun.test('aula'))
console.log(circun.test('aula gfvcdf'))


const plus = /go+l/
console.log(plus.test('gooooollllll'))
console.log(plus.test('GOL'))
console.log(plus.test('gaol'))


const question = /gat?o/ // os dígitos anteriores são opcionais, depois da interrogação é obrigatório
console.log(question.test('gato'))
console.log(question.test('gao'))
console.log(question.test('gata'))
console.log(question.test('abdo'))
console.log(question.test('gatsgo'))


const precisao = /\d{5}-\d{3}/ // a chave especifica a estrutura que deve ser escrita
console.log(precisao.test('12345-123'))
console.log(precisao.test('12345123'))


const metodo = /\d+/
console.log(metodo.exec('1 23 existe')) // exec retorna mais informações
console.log(metodo.exec('345 existe'))
console.log(metodo.exec('não existe numero'))

console.log(('123 existe').match(/\d+/)) // mesma coisa que o exec


const nome = /\w+ (Maria|João|Ana)/ // verifica se pelo menos uma das condições está lá. | significa ou
console.log(nome.test('Me chamo Maria'))
console.log(nome.test('Me chamo José'))


// Práticas (contém erros)-----------------------------------------------------------------------------------

//URL
const url = /[?www.]\w+\.com.br|.com/
console.log(url.test('www.abc.com'))
console.log(url.test('www.abc.com.br'))
console.log(url.test('abc.com'))
console.log(url.test('abc.com.br'))
console.log(url.test('www.abc'))

console.log(url.test('www.com'))


// Terminação ID
const terminacao = /[a-z]+?id/
console.log(terminacao.test('colorid'))


// Marca
const marca = /[Marca:]\s\Nike|Adidas|Puma|Asics/
console.log(marca.test('Marca: Nike'))


// Email
const email = /\w+[@]\w+\.com/
console.log(email.test('layanelinno@gmail.com'))


// Ano, mês e dia
const data = /\d{4}-\d{2}-\d{2}/
console.log(data.test('2003-01-27'))
