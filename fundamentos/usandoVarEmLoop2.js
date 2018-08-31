const funcs = []


// por se tratar de uma declaração com var, a variavel n eh respeitada, sendo sobrescrita, sendo mostrado o ultimo valor inserido.
for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
