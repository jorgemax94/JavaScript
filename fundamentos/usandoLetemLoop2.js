const funcs = []

// devido a declaração com let, a variavel é salva em cada momento, não sendo sobrescrita como na declaração com var.s
for (let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()