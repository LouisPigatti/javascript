
const movie = {
    movieName: 'Django Livre',
    movieActor: 'Jamie Foxx',
    movieDirector: 'Quentin Tarantino',
    tarantinoMovies: {
        first: 'Kill Bill',
        second: 'Pulp Fiction',
    },
    makingMovie: function() {
        console.log('Making the movie...')
    }
}

movie.makingMovie() // para executar uma função dentro de um objeto fazemos assim.

console.log('Aqui temos um Object:', movie)

// criamos um objeto para organizar o código. Dentro de um objeto temos suas
// propriedades, ou seja, as variáveis inseridas ali.