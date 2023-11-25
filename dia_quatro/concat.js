let nume = [1, 2, 3, 4]
let letters = ['a', 'b', 'c']

concatenar = nume.concat(letters)// concatena as duas variáveis inteiras.
especifico = concatenar.slice(3, 6)// coloca o index que começa e um depois do que termina.

console.log(concatenar)
console.log(especifico)

let clients = ['João', 'Guilherme', 'Gabriel']
console.log(clients)
// o Join adiciona o que você colocar no final dos itens da array.
let clientsJoin = clients.join(', ')
console.log(clientsJoin)

let nomess = ['Sabrina', 'Letícia', 'Igor']
nomess.sort() // organiza os itens em ordem alfabética.
//nomess.reverse() // organiza os itens na ordem reversa da alfabética.
console.log(nomess)