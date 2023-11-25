// a factory cria objetos

function createMovie(name, actor, director) {
    const movie = {
        movieName: name,
        movieActor: actor,
        movieDirector: director,
        makingMovie: function() {
        console.log('Making the movie...')
    }
}
    return movie
}

const movie1 = createMovie('Django Livre', 'Jamie Foxx', 'Quentin Tarantino')
const movie2 = createMovie('Taxi Driver', 'Robert De Niro', 'Martin Scorsese')

movie1.nota = 9 // podemos adicionar propriedades dessa forma

console.log('Aqui temos uma factory: ', movie1)
console.log('Aqui temos uma factory: ', movie2)