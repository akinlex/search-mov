import React from 'react'

function MovieCards(props){

    // const {movie} = props;

    return(
        <div className="card">
            <img 
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.movie.poster_path}`}
                alt={props.movie.title + 'poster'}
            />
            <div className="card--content">
                <h3 className="card--title">{props.movie.title}</h3>
                <p><small>Release Date: {props.movie.release_date}</small></p>
                <p><small>Rating: {props.movie.vote_average}</small></p>
                <p className="card--desc">{props.movie.overview.slice(0,150)}</p>
            </div>
        </div>
    )
}

export default MovieCards