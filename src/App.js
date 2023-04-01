import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import MovieDetail from "./components/Catalog/MovieDetail";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Movies } from "./Data";
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState(Movies);

  const rentMovie = function(movieID){
    const movieIndex = movies.findIndex(m => m.id === movieID)
    const rentedMovie = {...movies[movieIndex] , isRented : !movies[movieIndex].isRented}
    movies.splice(movieIndex, 1 , rentedMovie)
    setMovies([...movies])
  }

  const getMovie = function(movieID){
    return movies.find(m => m.id === movieID)
  }

  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog movies={movies} rentMovie={rentMovie}/>} />
        <Route path="/movies/:id" element={<MovieDetail getMovie={getMovie}/>} />
      </Routes>
    </Router>
  );
}

export default App;
