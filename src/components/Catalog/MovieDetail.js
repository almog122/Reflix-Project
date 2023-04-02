import React from 'react'
import { useParams } from 'react-router-dom'
import { Movies } from "../../Data";
import './MovieDetail.css'

export default function MovieDetail() {

  const {id} = useParams()

  const movie = Movies.find(m => m.id === parseInt(id))

  return (
    <div className='movieDetail'>
      <h1 className='movieTitle'>{movie.title} ({movie.year})</h1>
      <img className='moviePic' src={movie.img} alt='' />
      <div className='movieDesc'>{movie.descrShort}</div>
    </div>
  )
}
