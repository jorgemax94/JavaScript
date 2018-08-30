const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna 'undefined' pois não existe o indice

valores[4] = 10
console.log(valores)
console.log(valores.length) // saber tamanho do array

valores.push({id: 3}, false, null, 'teste') // podemos acrescentar vários tipos diferentes de dados , não recomendado
console.log(valores)

console.log(valores.pop()) // retira o último valor do array
delete valores[0] // retira valores do elemento
console.log(valores)

console.log(typeof valores) // array é um objeto em js
