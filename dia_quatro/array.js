let num = [1, 2, 3, 4]

num.push(7, 8, 9) // adiciona números no final da array.

num.unshift(-2, -1, 0) // adiciona números no começo da array.

num.splice(3, 0, 'teste') // primeiro: index para ir a mensagem, segundo: se deseja apagar algo,
                          // terceiro: item que deseja adiocionar.

console.log(num.includes(0))// checar se algum item existe na nossa array.
console.log(num.indexOf(3))// passa o index que está o valor que você colocar nos parênteses.

console.log(num)