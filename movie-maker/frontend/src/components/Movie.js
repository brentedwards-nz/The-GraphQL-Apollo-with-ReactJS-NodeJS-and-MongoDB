import React from 'react'

const Movie = (props) => {
  return (
    <div className="card">
        <div className="container">
            <img src={props.image} alt={props.name} width="100%" height="300px"></img>
            <h2>{props.name}</h2>
            <h4>{props.genre}</h4>
            <h4>{props.year}</h4>
        </div>
    </div>
  )
}

export default Movie;