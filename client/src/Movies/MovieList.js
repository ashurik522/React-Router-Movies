import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import MovieCard from './MovieCard';
export default function MovieList(props){

 

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} title={movie.title} director={movie.director} metascore={movie.metascore}  id={movie.id}/>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, stars, id } = props;
  const { url } = useRouteMatch();
  

  return (
    <Link to={`/movies/${id}`} >
    <MovieCard  title={title} director={director} metascore={metascore} />
    </Link>
  );
}
