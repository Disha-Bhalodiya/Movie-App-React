import { NavLink, useParams } from "react-router-dom";
import Usefetch from "./Usefetch";

const SingleMovie = () => {
  const { id } = useParams();  //useparam is uesd for extract data  from url and used within the app
  console.log(id);

  const { isLoading, movie } = Usefetch(`&i=${id}`); //it will print movie id from api

  if (isLoading) { //it will print loading text when data print in single page
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;