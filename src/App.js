import logo from './logo.svg';
import './App.css';
import { Users , Movies } from './Data';
import { useState } from 'react';
import Landing from './components/Landing';
import Catalog from './components/Catalog/Catalog';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState(Users);
  const [movies, setMovies] = useState(Movies);

  const getUserData = (user) => {
    return users[user];
  }

  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
