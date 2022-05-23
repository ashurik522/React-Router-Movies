import React from 'react';

export default function MovieCard (props) {
  const { movie, id } = props;

  return(
  <div className="save-wrapper">
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
      <h3>Actors</h3>
      {movie.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    <div className="save-button">Save</div>
  </div>
  )
}
