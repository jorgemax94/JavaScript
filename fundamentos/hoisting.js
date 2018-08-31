console.log('a = ', a) // mesmo que a variável tenha sido declarada depois da requisição , ela sofre o içamento, sendo definida como 'undefined'
var a = 2
console.log('a = ', a) // retornará o valor atribuido na linha 2

//hoisting : mover a declaração para o topo da aplicação