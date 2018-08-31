// par nome/valor

const saudacao = 'Opa' // contexto léxico 1. local fisico onde sua variável foi declarada.

function exec(){
    const saudacao = 'Falaaaa' // Contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 21,
    peso: 90,
    endereco:{ // um objeto pode ter varios objetos.
        logradouro: 'Rua invisivel',
        numero: 123
    }
}