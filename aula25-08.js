// Programação assíncrona--------------------------------------------------------------------------------------------------------------------------------------------------------
// ações podem ser executadas o tempo todo, sem precisar que algo termine pra outro começar

function enviarEmail(corpo, para, callback) {
    setTimeout(() => { // definir um tempo para a ação acontecer
    console.log(`
    Para: ${para}
    ==================
    ${corpo}
    ==================
    De: Sicrano
    `)
    callback(para, 'blablabla') // função que faz uma ação depois de um acontecimento
    }, 5000) // segundos em milésimos
}
                                                // email -> para, outrCoisa -> 'blablabla"
enviarEmail('Oi, tudo bem?', 'fulano@gmail.com', (email, outraCoisa) => {
    console.log(`Email enviado com sucesso para ${email} ${outraCoisa}`)})



// Caso o envio do email dê algum erro-------------------------------------------------------------------------------------------------------------------------------------------
function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
    // console.log(`
    // Para: ${para}
    // ==================
    // ${corpo}
    // ==================
    // De: Sicrano
    // `)
    let deuErrado = false // ou true
    if (deuErrado) { // só citar assim, o programa entende que quis dizer blabla == true
        callback(para, deuErrado)
    } else {
        callback(para, 'blablabla')
    }
    }, 5000)
}

enviarEmail('Oi, tudo bem?', 'fulano@gmail.com', (email, erro=false, outraCoisa) => {
    if(erro){
        console.log(`Houve algum erro no envio do email para ${email}.`)
    } else {
        console.log(`Email enviado com sucesso para ${email} ${outraCoisa}`)}
    }
    )



// usando reject, resolve, then e catch------------------------------------------------------------------------------------------------------------------------------------------
function enviarEmail(corpo, para) { // os parâmetros só estão aqui para simular o envio de email
    return new Promise((resolve, reject) => { // promise, representa um valor que será executado no futuro. resolve, promessa cumprida. reject, promessa não cumprida
        setTimeout(() => {
            let emailEnviado = true // ou true
            if (emailEnviado) { // só citar assim, o programa entende que quis dizer blabla == true
                resolve({email: para, tempo: "5s"}) // se deu bom, a promssa vai ser cumprida
            } else {
                reject(para) // se deu ruim, a promessa vai ser rejeitada
            }
        }, 5000)
    })
}

console.log('Iniciando envio do email....')     // retorna quando a promise é resolve
enviarEmail('Oi, tudo bem?', 'fulano@gmail.com').then((dados) => {
    console.log(`O email foi enviado com sucesso para ${dados.email}.`)
    console.log(`A duração do envio foi de ${dados.tempo}.`)
}).catch((email) => { // retorna quando a promise é reject
    console.log(`Houve algum erro no envio para ${email}.`)
})
console.log('Encerrando a caixa de email.')



// Simulação série de processos-------------------------------------------------------------------------------------------------------------------------------------------------
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

pegarId().then((id) => {
    buscarEmail(id).then((email) =>{
        enviarEmail("Oi, tudo bem?", email).then(({email, tempo}) => {
            console.log(`O email foi enviado com sucesso para ${email}.`)
            console.log(`A duração do envio foi de ${tempo}.`)
        }).catch((email) => {
            console.log(`Houve algum erro no envio para ${email}.`)
        })
    })
})
// podem ser adicionados outros catch's caso as outras promises são sejam cumpridas.
