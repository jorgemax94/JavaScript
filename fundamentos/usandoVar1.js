{
    {
        {
            {
                var sera = 'Será???'
                // var global, visivel em qualquer local da aplicação
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
    //var local , somente visivel no escopo da função
}

teste()
//console.log(local) não consegue acessar a variavel local

