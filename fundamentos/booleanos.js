let isAtivo = false
console.log(isAtivo)

isativo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // sempre colocar '!!' para forçar a linguagem a ler como boolena

console.log('Os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) // array
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar ...')
console.log(!!('' || null || 0 || ' ')) // retorna o primeiro verdadeiro da sentença

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // se a varial nome for verdadeira, retorna ela, senão ele retorna o 'Desconhecido'

