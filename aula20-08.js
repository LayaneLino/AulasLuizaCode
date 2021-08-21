// Classes-------------------------------------------------------------------------------------------------------------------------------------------
    // classes são 'formas', 'plantas', que constroem a mesma coisa. Funciona através do conceito de herança

class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }
    anunciar(){
        console.log(`Indicando o livro ${this.nome}.`)
    }
    exibirPaginas(){
        console.log(`Esse livro tem ${this.paginas} páginas.`)
    }
}
const livro = new Livro("Percy Jackson", "Editora X", 200)
console.log(livro)
livro.anunciar()
livro.exibirPaginas()

const livro2 = new Livro("Harry Potter", "Editora Y", 500)
console.log(livro2)
livro2.anunciar()
livro2.exibirPaginas()


// Prática com classe
class Pessoas {
    constructor(nome, idade, cnh) {
        this.nome = nome,
        this.idade = idade,
        this.cnh = cnh
    }
    identidade() {
        console.log(`O nome cadastrado é ${this.nome}.`)
    }
    certidaoNascimento() {
        console.log(`A idade do indivíduo é ${this.idade}.`)
    }
    dirigir() {
        console.log(`O número da CNH sob o nome da pessoa é ${this.cnh}.`)
    }
}

const pessoa = new Pessoas('Fulano', 'x anos', '1234567')
pessoa.identidade()
pessoa.certidaoNascimento()
pessoa.dirigir()


// Revisão da aula anterior--------------------------------------------------------------------------------------------------------------------------

const lista = [1, 2, 3, 4, 5]
console.log(lista)

for (let i = 0; i < lista.length; i++) {
        console.log(`No índice ${i} o valor é ${lista[i]}.`)
}


const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const dia = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for(let count = 0; count < mes.length; count++){
    console.log(`O mês ${mes[count]} tem ${dia[count]} dias.`)
}

