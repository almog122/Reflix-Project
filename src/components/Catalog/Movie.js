import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie , rentMovie}) {
  return (

    <div className='movie'>
    <Link to={`/movies/${movie.id}`}> <img src={movie.img} alt='' /> </Link>
      <button onClick={() => rentMovie(movie.id)}> {movie.isRented ? '-' : '+'} </button>
    </div>

  )
}
