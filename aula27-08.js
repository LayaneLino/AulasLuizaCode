// Ferramentas do node---------------------------------------------------------------------------------------------------------------
let { readFile, writeFile } = require('fs') // File  System, módulo do node que realiza  operações com arquivos e diretórios

// esta função imprime o que está escrito no arquivo
readFile('nomeDoArquivo', "utf8", (error, texto) => { // utf 8 é o padrão de codificação de caracteres do BR
    if(error) {
        throw error
    } else {
        console.log(texto)
    }
})


// Edita mas sem alterar o arquivo inicial
readFile("nomeDoArquivo", "utf8", (error, texto) => {
    if(error) {
        throw error
    } else {
        var conteudo = JSON.parse(texto) // transforma o objeto json em js
        console.log(conteudo)

        conteudo.idade = 25
        console.log('Conteúdo após a mudança.')
        console.log(conteudo)
        
    }
})


// esta função edita o arquivo original.
let novoTexto = "Pense como um boleto. Um boleto sempre vence!"
writeFile('nomeDoArquivo', novoTexto, (error) => {  
    if(error) {
        throw error
    } else {
        console.log('O arquivo original foi modificado.')
    }
})


// Function usando o node para modificar arquivos
function modificarUsuario(nome, idade, profissao){
    readFile("nomeDoArquivo", "utf8", (error, texto) => {
        if(error) {
            throw error
        } else {
            var conteudo = JSON.parse(texto) 
            console.log(conteudo)
    
            conteudo.nome = nome
            conteudo.idade = idade
            conteudo.profissao = profissao
            console.log('Conteúdo após mudança.')
    
            writeFile('nomeDoArquivo', JSON.stringify(conteudo), (error) => { // transforma o objeto js em json
                if(error) {
                    throw error
                } else {
                    console.log('Arquivo alterado com sucesso.')
                }
            })
        }
    })  
}
modificarUsuario("Fulano", 28, "Software Engineer")


// Conceitos express API-------------------------------------------------------------------------------------------------------------
//Protocolo HTTP: Define um conjunto de métodos de requisição que indicam a ação a ser executada.
// API: Software que permite uma coisa comunicar com outra, como front se comunicar com um banco de dados
// app.get: Solicitar algo.

// app.head: Solicita uma resposta igual o get, mas sem conter o corpo da resposta.
// app.listen: Inicia um server que escuta conexões.
// app.post: Create, utilizado para criar algo novo.
// app.put: Update, modifica/altera instâncias, como atualizar uma informação, mas congela toda a instância.
// app.patch: Usado para modificações, aplica modificações parciais, não congela a instância então pode dar conflito.
// O patch permite outra pessoa modificar ao mesmo tempo, então o put acaba sendo mais usado para evitar erros.
// app.delete: Remove um recurso específico por completo.

// Require é o objeto de solicitação. Request representa o objeto de resposta http que é enviada quando recebe um request http.

// Status code de HTTP são os códigos de status de respostas HTTP, indicam se uma requisição corretamente concluída ou não.
// Respostas de informação (100~199), resp. de sucesso (200~299), redirecionamento (300~399), errros do cliente (400~499),
// erros do servidor (500-599). -> http.cat, httpstatusdogs.com

// Web Services: Serviços que servem para prover uma camada de comunicação com outras coisas.
// Rest: Padrão de desenvolvimento de web services.

// Realizando testes de APIs em um API Client (insomnia, postman, etc)---------------------------------------------------------------
let express = require("express") // express, framework para aplicativo web. npm install express
let app = express()

app.get('/', function(requisicao, resposta) {  // 
    resposta.send('AAAAAAAAAAAA')
})

app.listen(3000, function() {
    console.log('Iniciando servidor.')
})
// no navegador/API Client: localhost:3000