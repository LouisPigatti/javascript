let airport = 'Viracopos'

switch (airport) {
    case 'Congonhas':
        console.log('Pegue o aeroporto de Congonhas em Guaruhos.')
        break
    case 'Viracopos':
        console.log('Pegue o aeroporto de Viracopos em Campinas.')
        break
    case 'Santos Dumont':
        console.log('Pegue o aeroporto de Santos Dumont no Rio de Janeiro.')
        break
    default: // default é utilizado caso a váriavel não seja encontrada dentro do switch
        console.log('Não encontramos um aeroporto.')
}