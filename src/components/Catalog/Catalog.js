import React, { useState } from 'react'
import Movie from './Movie';

export default function Catalog ({movies , rentMovie}) {

  const [searchBar, setSearchBar] = useState("");
  const [budget , setBudget] = useState(6)

  const UpdateSearchBar = function(event){
    setSearchBar(event.target.value)
  }

  const rentMovieWithBudget = function(MovieID){
    let isMovieRented = movies.find(movie => movie.id === MovieID).isRented
    if(budget > 0 || isMovieRented){
      rentMovie(MovieID)
      setBudget(isMovieRented ? budget + 3 : budget - 3)
    }else{
      alert('Insufficient budget')
    }
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

      <input id="search-input" onChange={UpdateSearchBar} value={searchBar} />

      <div>Budget: {budget}</div>

      {(isRentedMovies(movies) ?
      <>
        <div> Rented : </div>
        <div> {movies.map(movie => movie.isRented && filterMovieTitle(movie.title) ? <Movie movie={movie} rentMovieWithBudget={rentMovieWithBudget} key={movie.id} /> : <></>)} </div>
      </>
      : <></>)}

      <div> Catalog :</div>
      <div>
        {movies.map(movie => !movie.isRented && filterMovieTitle(movie.title) ? <Movie movie={movie} rentMovieWithBudget={rentMovieWithBudget} key={movie.id} />  : <> </>)}
      </div>
    </div>
  )
}
