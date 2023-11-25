const temperaturaBrasil = [33, 21, 14, 30]
const temperaturaAlta = temperaturaBrasil.every(function(valor) {
    return valor >= 14
})
// o Every checa todos os itens da variável e se tiver um item fora da condição, vai dar false.
console.log(temperaturaAlta)

const temperaturaRussia = [-3, -21, 4, 3]
const temperaturaNegativa = temperaturaRussia.filter(function(valor) {
    return valor <= 0
})
// o Filter checa e retorna apenas os valores que se encaixam na condição estabelecida.
console.log(temperaturaNegativa)