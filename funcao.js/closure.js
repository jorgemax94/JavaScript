//closure é o escopo criado quando um função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto Lexico

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())