// And = &&    Or = ||    Not = !

let idadeVotar = true
let tituloEleitor = true
let podeVotar = idadeVotar && tituloEleitor   // no And os dois valores precisam ser true para dar true
// let podeVotar = idadeVotar || tituloEleitor   // no Or apenas um dos dois precisa ser true

console.log('Pode votar: ', podeVotar)

let podeViajar = !podeVotar // no Not ele verifica o contrário.
console.log('Pode viajar: ', podeViajar)

let corCliente = 'black'
let corEstoque = 'white'
let corEntregue = corCliente || corEstoque // o código verifica o primeiro item, nesse caso
                                           // o 'corCliente'. Se a checagem for true, ele retorna
                                           // esse primeiro item, senão ele vai para o segundo item.

console.log(corEntregue)