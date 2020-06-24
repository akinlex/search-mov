import React, {useState} from 'react';
import MovieCards from './movie_cards';

function SearchMovies(props){

    const [query, setQuery] = useState('')

    const [movies, setMovies] = useState([])

    const searchMovies = async(e) =>{
        e.preventDefault();

    // const query = 'kiss and kill'

    const url = `https://api.themoviedb.org/3/search/movie?api_key=e7eff75ebc30ebb30d55d8c3f9423d16&query=${query}`;
    
    try{
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        console.log(data.results)
    }catch(err){
        console.log(err)
    }
    
}
    const change = (e) => setQuery(e.target.value)
    
    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
                className="input"
                type="text" 
                name="query"
                placeholder="e.g Lord of the rings"
                value={query}
                onChange={change}
            />
            <button 
                className="button" 
                type="submit"
            >Search
            </button>
        </form>
        <div className="grid-container">
            {movies && movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCards movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}

export default SearchMovies