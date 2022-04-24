import React, { Component } from 'react'
import Movie from '../components/Movie'

export default class Movies extends Component {
    state = {
        movies: [
            {id: 1, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
            {id: 2, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
            {id: 3, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
            {id: 3, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
            {id: 3, name:'John Wick', genre:'Action', year: 2022, image: 'https://rb.gy/gywrxp'},
        ]
    }
    render() {
      return (
        <div className="movies">
            {this.state.movies.map((movie) => {
                return <Movie key={movie.id} name={movie.name} genre={movie.genre} year={movie.year} image={movie.image} />
            })}
        </div>
      )
    }
}
