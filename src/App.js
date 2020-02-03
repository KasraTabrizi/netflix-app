import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import Search from './Components/Search';
import './App.css';


const App = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=72146fe8f286acb6e67d2f0ba0c83b14")
      .then(res => res.json())
      .then(res => setMovies(res.results))
  }, []);

  return (
    < div className="App" >
      <Search />
      <div className="movie-display-box">
        {movies.map(element => <Card key={element.id} title={element.title} image={element.poster_path} overview={element.overview} voteAverage={element.vote_average} />)}
      </div>
    </div >
  );
}

export default App;
