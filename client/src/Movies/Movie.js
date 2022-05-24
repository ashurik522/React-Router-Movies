import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom'
import MovieCard from './MovieCard';

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const { id } = useParams();
  const { url, path } = useRouteMatch;
  
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div>
      <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars}/>
    </div>
  );
}
