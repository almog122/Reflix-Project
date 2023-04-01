import React, { useState } from 'react'
import Movie from './Movie';
import {Movies} from "../../Data";
import { useParams } from 'react-router-dom';

export default function Catalog () {

  const {username} = useParams()

  localStorage.setItem('tempUser', JSON.stringify({
    movies : Movies ,
    budget : 6
  }))

  const userData = JSON.parse(localStorage[username] || localStorage['tempUser'])

  const [userMovies, setUserMovies] = useState(userData.movies);
  const [searchBar, setSearchBar] = useState("");
  const [budget , setBudget] = useState(userData.budget)

  const rentMovie = function(movieID){
    const movieIndex = userMovies.findIndex(m => m.id === movieID)
    const isMovieRented = userMovies[movieIndex].isRented

    if(budget > 0 || isMovieRented){
      const rentedMovie = {...userMovies[movieIndex] , isRented : !isMovieRented}
      const newBudget = isMovieRented ? budget + 3 : budget - 3
      
      userMovies.splice(movieIndex, 1 , rentedMovie)
      setUserMovies([...userMovies])

      setBudget(newBudget)

      localStorage.setItem(username, JSON.stringify({
        movies : userMovies ,
        budget : newBudget
      }))
    }else{
      alert('Insufficient budget')
    }
  }

  const UpdateSearchBar = function(event){
    setSearchBar(event.target.value)
  }

  const isRentedMovies = function(movies){
    if(movies.find(movie => movie.isRented === true) !== undefined){
      return true;
    }

    return false
  }

  const filterMovieTitle = function(title){
    return title.toLowerCase().includes(searchBar.toLowerCase())
  }

  return (
    <div className='catalog'>

      <div>Welcome {username}</div>

      <input id="search-input" onChange={UpdateSearchBar} value={searchBar} />

      <div>Budget: {budget}</div>

      {(isRentedMovies(userMovies) ?
      <>
        <div> Rented : </div>
        <div> {userMovies.map(movie => movie.isRented && filterMovieTitle(movie.title) ? <Movie movie={movie} rentMovie={rentMovie} key={movie.id} /> : <></>)} </div>
      </>
      : <></>)}

      <div> Catalog :</div>
      <div>
        {userMovies.map(movie => !movie.isRented && filterMovieTitle(movie.title) ? <Movie movie={movie} rentMovie={rentMovie} key={movie.id} />  : <> </>)}
      </div>
    </div>
  )
}
