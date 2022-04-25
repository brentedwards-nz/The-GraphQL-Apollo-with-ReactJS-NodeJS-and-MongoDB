const Movie = require('../model/model')

const movies = [
    {id: 1, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
    {id: 2, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
    {id: 3, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
    {id: 4, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
    {id: 5, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
] 

const resolvers = {
    movies: () => {
        return Movie.find({})
    },
    movieByName: (args) => {
        return Movie.findOne({name: args.name})
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        movie.save()
        return movie
    }

}

module.exports = resolvers