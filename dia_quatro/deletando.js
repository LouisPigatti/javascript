
const numeros = [1, 2, 3, 4]
const del = numeros.pop()// deleta o último item da array
const dell = numeros.shift()// deleta o primeiro item da array
const delll = numeros.splice(1, 1)// primeiro você escolhe a partir de que index você quer deletar.
                                  // depois quantos itens você quer deletar.

const esvaziar = [1, 2, 3, 4, 5]
esvaziar.splice(0, esvaziar.length)// coloca a partir de que index quer comerçar a apagar e onde acaba.

console.log(esvaziar)
console.log(numeros)