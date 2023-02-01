import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchICon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';
const movie1 = {
  "Title": "Pathaan",
  "Year": "2023",
  "imdbID": "tt12844910",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg"
}
const App = () => {
    const [movies,setMovies] = useState([]);

    const [searchTerm,setSearchTerm] = useState([]);


    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() =>{
    searchMovies('SpiderMan');
  },[]);
  return (
    <div className="app">
      <h1>Gaurav's Movie Center</h1>

      <div className="search">
        <input
        placeholder="Search for Movies"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img 
        src ={SearchICon}
        alt="search icon"
        onClick={()=> searchMovies(searchTerm)}
        />
      </div>

    {
      movies?.length > 0 
        ? (<div className="container">
          {movies.map((movie) => (
              <MovieCard movie={movie}/>
          ))}
        </div>) :(
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )
    }
  </div>
  );
}

export default App;

