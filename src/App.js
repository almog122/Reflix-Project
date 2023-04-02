import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import MovieDetail from "./components/Catalog/MovieDetail";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Movies } from "./Data";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState('');

  const setUsername = function(username){
    setCurrentUser(username)
  }

  const getMovie = function(movieID){
    return Movies.find(m => m.id === movieID)
  }

  return (
    
    <Router>
      <>
        <Navbar currentUser={currentUser}/>
      </>
      <Routes>
        <Route path="/" element={<Home setUsername={setUsername}/>} />
        <Route path="/catalog/:username" element={<Catalog />} />
        <Route path="/movies/:id" element={<MovieDetail getMovie={getMovie}/>} />
      </Routes>
    </Router>
  );
}

export default App;
