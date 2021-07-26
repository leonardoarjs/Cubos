const cliente = {
    nome: 'Leonardo',
    idade: 28,
    produtos: [
        {
            nome: 'Batata',
            precoUnit: 1500,
            quant: 1
        },
        {
            nome: 'Cerveja',
            precoUnit: 1800,
            quant: 10
        }
    ]
}

console.log(cliente.nome)
console.log(cliente.idade)
cliente.idade = 28.1
console.log(cliente.idade)
console.log(cliente.produtos[0].nome)
console.log(`R$${cliente.produtos[1].precoUnit / 100},00`)