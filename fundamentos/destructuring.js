// novo recurso ES2015


const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rau ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // destructor
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const{ sobrenome, bemHumorado = true }= pessoa
console.log(sobrenome, bemHumorado)

