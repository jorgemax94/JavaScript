console.log(Math.ceil(6.1)) // função que arredonda os numeros para cima.

const obj1 = {}
obj1.nome = 'Bola' //adicionando atributos ao objeto
//obj1['nome'] = 'Bola2' equivalente a atribuição de cima
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // this instancia a função. função chamando função
    this.exec = function (){
        console.log('Exec....')
    }
}

const obj2 = new Obj('Cadeira') // instanciando um novo objeto
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()