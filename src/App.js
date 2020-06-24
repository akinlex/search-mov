import React from 'react';
import './App.css';
import SearchMovies from './components/search_movies';

function App() {
  return (
    <div className="container">
      <h1 className="title">SearchMov</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
