import React from 'react';
import { useHistory } from 'react-router-dom';


export default function SavedList(props) {
  const history = useHistory()
  

  const routeToHome = () => {
    history.push("/movies")
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button className="home-button" onClick={routeToHome}>Home</button>
    </div>
  );
}
