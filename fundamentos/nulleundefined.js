//const b = a atribuição por referência, ambos sofrem alterações juntos

/*
atribuição por referência = atribuição de objetos
atribuição por valores = atribuição de valores primitivos
*/


let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) não é possível referenciar algo nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco para remover valor da variavel
console.log(produto)


produto.preco = null // sem preço
console.log(!!produto.preco)
console.table(produto)

