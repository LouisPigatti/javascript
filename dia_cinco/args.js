function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}

console.log('Aqui estou usando a função com argumentos não nomeados: ', price(10, 9))
// quando usamos o arguments não precisamos definir quantos valores vão utilizados na função.

function financiamento(preco, juros = 2.5, anos = 5) {
    return preco * juros / 100 * anos
}

console.log('Usando argumentos default: ' , financiamento(20000))
// os argumentos default são quando você tem valores que não vão mudar e você já coloca seus
// respectivos valores no começo da função.