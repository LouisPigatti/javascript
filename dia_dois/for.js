// FOR IN, você consegue passar o for entre suas váriaveis dentro de um object.

const car = {
    modelo: 'Mercedez',
    ano: 2021,
    km: 30000
}

for (let i in car) {
    console.log(i, car[i])
}

// FOR OF, utilizado nas arrays para ver o valor de cada item da lista.

const friends = ['João', 'Gui', 'Marcos']

for (let i of friends) {
    console.log(i)
}