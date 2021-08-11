const pessoa = {
    nome: 'leonardo',
    idade: 28,
    cidade: 'campinas'
}

console.log(pessoa.nome)

const { nome, idade } = pessoa
console.log(nome)
console.log(idade)

const lodash = require("lodash")

const lista = [1, 2, 3, 4, 5, 'aa']
console.log(lodash.reverse(lista))
