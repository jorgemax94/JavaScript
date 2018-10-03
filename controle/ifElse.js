const imprimirResultado = function(nota){
    if(nota>= 7){
        console.log('Aprovado! ')
    }else{
        console.log('Reprovado! ')
    }
}

imprimirResultado(7.5)
imprimirResultado(4.5)
imprimirResultado('Epa!') // cuidado com tipos diferentes.