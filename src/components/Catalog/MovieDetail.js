import React from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail({getMovie}) {

  const {id} = useParams()

  const movie = getMovie(parseInt(id))

  return (
    <div>
      <h1>{movie.title} {movie.year}</h1>
      <img src={movie.img} alt='' />
      <div>{movie.descrShort}</div>
    </div>
  )
}
