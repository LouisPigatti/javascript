
const movies = [
    {id: 1, movieName: 'Kill Bill'},
    {id: 2, movieName: 'Jurassic'},
    {id: 3, movieName: 'Vingadores'}
]

console.log('Isso é uma arrow function: ', movies.find(movie => movie.movieName == 'Vingadores'))

// a arrow realiza uma função sem precisarmos montar o corpo da função.
// ela agiliza e encurta o código.