// Async-------------------------------------------------------------------------------------------------------------------
function pegarUsuarios() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {nome: 'Fulano', hobby: 'dormir'},
                {nome: 'Cicrano', hobby: 'ler'},
                {nome: 'Beltrano', hobby: 'comer'},
            ])
        }, 5000)
    })
}

async function main() {
    var usuarios = await pegarUsuarios()
    console.log(usuarios)
}
main()


// As vezes não compensa tentar tratar um erro-----------------------------------------------------------------------------
function somar(numA, numB){
    let a = Number(numA)
    let b = Number(numB)
    if(Number.isNaN(a) || Number.isNaN(b)){
        console.log('Digite um NÚMERO.')
    } else {
        console.log(`O resultado foi: ${numA + numB}`)
    }
}
somar(2,'2') // retorna uma concatenação de 22


// THROW ERROR------------------------------------------------------------------------------------------------------------
function verificarString(palavra){
    if(typeof palavra == 'string') {
        console.log('Palavra informada.')
    } else {
        throw new Error('Parâmetro inválido') // gera um erro que para a execução do programa
    }
}

verificarString('abc')
verificarString(2)


// TRY, CATCH e FINALLY---------------------------------------------------------------------------------------------------
try{
    console.log('blabla')
    console.log(`Seu nome é ${varQueNaoExiste}`)
} catch(erro){
    console.log(erro) // se a primeira condição não der certo, imprima um erro (pode ser personalizado)
   // não precisa necesariamente ter o console
} finally {
    console.log('Encerrando o programa') // imprime indpendente se deu erro ou nao, geralmente não é utilizado
}


// ------------------------------------------------------------------------------------------------------------------------
function pegarId(){
    console.log('Buscando o ID.....')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
}

function buscarEmail(id){
    console.log('Buscando o email.....')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('fulano@gmail.com')
        }, 3000)
    })
}

function enviarEmail(corpo, para) { 
    console.log('Enviando email.....')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let emailEnviado = true
            if (emailEnviado) {
                resolve({email: para, tempo: "5s"})
            } else {
                reject(para)
            }
        }, 5000)
    })
}

async function main() {
    var id = await pegarId()
    var email = await buscarEmail(id)
    // await enviarEmail("Oi, tudo bem?", email).then(({email, tempo}) => {
    //     console.log(`O email foi enviado com sucesso para ${email}.`)
    //     console.log(`A duração do envio foi de ${tempo}.`)
    // }).catch((email) => {
    //     console.log(`Houve algum erro no envio para ${email}.`)
    // })
    // console.log('Encerrando a caixa de email.')

    // ooouuuuu
    try{
        await enviarEmail('Oi, tudo bem?', email)
        console.log('O email foi enviado com sucesso.')
        console.log('Encerrando a caixa de email.')
    } catch(e){
        console.log(e)
    }
}
main()