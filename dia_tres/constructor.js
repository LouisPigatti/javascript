// o constructor tem a mesma função da factory, mas ele é bem mais prático.
// o nome da função sempre começa com maiúsculo

function CreateMovie(name, actor, director) {
    this.movieName = name;
    this.movieActor = actor;
    this.movieDirector = director
}

const filme = new CreateMovie('Django Livre', 'Jamie Foxx', 'Quentin Tarantino')
//const movie2 = CreateMovie('Taxi Driver', 'Robert De Niro', 'Martin Scorsese')

console.log('Aqui temos um constructor: ', filme)
//console.log('Aqui temos uma factory: ', movie2)

// o javascript tem um Garbage Collector onde ele retira variáveis que não
// estão sendo usadas no seu código.