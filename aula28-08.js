// Loja API---------------------------------------------------------------------------------------------------------------------------
let express = require("express")
let app = express()

// Faz a tradução entre js<->json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Simulação de banco de dados
var bancoDeDados = {
    produtos: [
        {
            id: 1,
            nome: 'Chocolate',
            categoria: 'Alimentos',
            preco: 10
        },
        {
            id: 2,
            nome: 'Iphone',
            categoria: 'Celular',
            preco: 5000
        },
        {
            id: 3,
            nome: 'Sorvete',
            categoria: 'Alimentos',
            preco: 30
        },
        {
            id: 4,
            nome: 'Notebook',
            categoria: 'Computador',
            preco: 8000
        }
    ]
}

var qtdeId = 5 // o id dos novos produtos contará a partir do 4
// ou var qtdeId = ++bancoDeDados.produtos.length

app.listen(3000, function() {
    console.log('Servidor no ar.')
})

// Listar produtos
app.get("/produtos", (req, res) => {
    res.statusCode = 200
    res.json(bancoDeDados)
})

// Buscar produtos por ID
app.get("/produto/:id", (req, res) => {
    if(isNaN(req.params.id)){ // bad request caso o id digitado seja string
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var produto = bancoDeDados.produtos.find(prod => prod.id == id) //verifica se o id do produto é o id que foi pedido

        if(produto == undefined) { // not found caso a id não exista
            res.sendStatus(404)
        } else {
            res.json(produto)
            res.sendStatus(200)
        }
    }
})

// Criar produto
app.post('/produto', (req, res) => {
    const { nome, categoria, preco } = req.body;
    if(nome == null || preco == null){ // bad request caso o nome e preço não sejam informados
    res.sendStatus(400);
    } else {
    bancoDeDados.produtos.push({
        id: qtdeId,
        nome,
        categoria,
        preco
    });
    // res.json(req.body) //retorna o que foi criado
    res.sendStatus(201);
    qtdeId++ 
}
});

// Deletar produto
app.delete('/produto/:id', (req, res) => {
    if(isNaN(req.params.id)){ // bad request se o id for uma string
        res.sendStatus(400)
    } else {
        const id = parseInt(req.params.id);
        const produtoId = bancoDeDados.produtos.findIndex( prod => prod.id == id); // verifica se o id pedido é o id do produto
    
        if(produtoId == -1) { // -1 significa que o indice não existe, not found
            res.sendStatus(404);
        } else {
            bancoDeDados.produtos.splice(produtoId, 1) // método para remover
            res.sendStatus(200)
        }
    }
})

// Editar produtos
app.put('/produto/:id', (req, res) => {
    if(isNaN(req.params.id)){ // bad request caso o id informado não seja um número
        res.sendStatus(400)
    } else {
        const id = parseInt(req.params.id)
        const produto = bancoDeDados.produtos.find(prod => prod.id == id) // procura o produto que tem o id informado

        if(produto == undefined){ // not found caso o id não exista
            res.sendStatus(404)
        } else {
            var { nome, categoria, preco} = req.body

            if(nome != undefined){ // caso o nome estiver sendo mudado
                produto.nome = nome
            }
            if(categoria != undefined){ // caso a categoria estiver sendo mudada
                produto.categoria = categoria
            }
            if(preco != undefined){ // caso o preço estiver sendo mudado
                produto.preco = preco
            }
            res.sendStatus(200)
        }
    }
})


// Biblioteca API---------------------------------------------------------------------------------------------------------------------
const express = require('express')
const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))

var bancoDeDados = {
    autores: [
        {
            id: 1,
            nome: "Machado de Assis",
            nacionalidade: "Brasileiro"
        },
        {
            id: 2,
            nome: "José de Alencar",
            nacionalidade: "Brasileiro"
        },
        {
            id: 3,
            nome: "J. K. Rowling",
            nacionalidade: "Britânica"
        }
    ],
    livros: [
        {
            id: 1,
            nome: "Dom Casmurro",
            descricao: "blablabla",
            autor: 1,
            publicacao: "1899",
            preco: 25,
            estado: "Novo" 
        },
        {
            id: 2,
            nome: "Memórias Póstumas de Brás Cubas",
            descricao: "bla bla bla",
            autor: 1,
            publicacao: 1881,
            preco: 20,
            estado: "Usado"
        },
        {
            id: 3,
            nome: "O Sertanejo",
            descricao: "bla blaaa bla",
            autor: 2,
            publicacao: 1875,
            preco: 30,
            estado: "Usado"
        },
        {
            id: 4,
            nome: "Harry Potter e a Câmara Secreta",
            descricao: "bla bla bla catiau",
            autor: 3,
            publicacao: 2006,
            preco: 60,
            estado: "Seminovo"
        },
        {
            id: 5,
            nome: "Harry Potter e a Pedra Filosofal",
            descricao: "bla bla bla catiau",
            autor: 3,
            publicacao: 2006,
            preco: 50,
            estado: "Novo"
        }
    ]
}

var qtdeLivros = ++bancoDeDados.livros.length

api.listen(3001, function () {
    console.log('Servidor em funcionamento.')
})

// Listar livros
api.get('/livros', (req, res) => {
    res.json(bancoDeDados.livros)
    res.sendStatus(200)
})

// Listar autores
api.get('/autores', (req, res) => {
    res.json(bancoDeDados.autores)
    res.sendStatus(200)
})

// Listar livros por id
api.get("/livro/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else {
        const id = parseInt(req.params.id)
        const livro = bancoDeDados.livros.find(book => book.id == id)

        if(livro == undefined){
            res.sendStatus(404)
        } else {
            res.json(livro)
            res.sendStatus(200)
        }
    }
})

// Listar por nome
//localhost:3001/livros?nome=Harry%20Potter
api.get('/livros', (req, res) => {
    if(req.query.nome){ // Tratamento para livros com o mesmo nome
        const livros = bancoDeDados.livros.filter((livro) => livro.nome.toLowerCase().includes(req.query.nome.toLowerCase()))

            if(livros == undefined){
                res.sendStatus(404)
            } else {
                res.json(livros)
                res.sendStatus(200)
            }
    } else {
        res.json(bancoDeDados.livros)
        res.sendStatus(200)
    }
})

// Cadastrar novo livro
api.post('/livro', (req, res) => {
    var { nome, descricao, autor, publicacao, preco, estado } = req.body;

    if(nome == undefined || estado == undefined || autor == undefined){ // dando obrigatoriedade para estas informações
    res.sendStatus(400);
    } else {
        let autorId = parseInt(autor)
        let autorAchado = bancoDeDados.autores.find((autor) => autor.id == autorId)
        if(autorAchado == undefined) {
            res.sendStatus(404)
        } else {
            bancoDeDados.livros.push({ // adicionando o livro aumentado o contador de id (linha 206)
                id: qtdeLivros,
                nome,
                descricao,
                autor: autorAchado.id,
                publicacao,
                estado,
                preco
        })
        qtdeLivros++
        res.sendStatus(201)
        }
    }       
})

// Deletar livro
api.delete('/livro/:id', (req, res) => {
    if(isNaN(req.params.id)){ // bad request se o id for uma string
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)
        let livro = bancoDeDados.livros.findIndex(book => book.id == id) // verifica se o id pedido é o id do produto
    
        if(livro == -1) { // -1 significa que o indice não existe, not found
            res.sendStatus(404)
        } else {
            bancoDeDados.livros.splice(livro, 1) // método para remover
            res.sendStatus(200)
        }
    }
})

// Editar livro
api.put('/livro/:id', (req, res) => {
    if(isNaN(req.params.id)){ // bad request caso o id informado não seja um número
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)
        let livro = bancoDeDados.livros.find(book => book.id == id) // procura o produto que tem o id informado

        if(livro == undefined){ // not found caso o id não exista
            res.sendStatus(404)
        } else {
            var { nome, descricao, autor, publicacao, estado, preco} = req.body

            if(nome != undefined){ // caso o nome estiver sendo mudado
                livro.nome = nome
            }
            if(descricao != undefined){ // caso a descrição estiver sendo mudada
                livro.descricao = descricao
            }
            if(autor != undefined){ // caso o autor estiver sendo mudado
                livro.autor = autor
            }
            if(publicacao != undefined){ // caso a publicação estiver sendo mudada
                livro.publicacao = publicacao
            }
            if(estado != undefined){ // caso o estado estiver sendo mudado
                livro.estado = estado
            }
            if(preco != undefined){ // caso o preço estiver sendo mudado
                livro.preco = preco
            }
            res.sendStatus(200)
        }
    }
})
