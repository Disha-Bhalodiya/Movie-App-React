import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    //when data is loading than show this text
    return <div className="loading"> Loading.... </div>;
  }

  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {" "}
          {/* //store movie name inside movie state and update state when data is found from api */}
          {movie
            ? movie.map((curmovienm) => { //passed param for store value which get from api
                const { imdbID, Title, Poster, Year } = curmovienm; //find all data of movie name
                const movieName = Title.substring(0, 15); //when title is lond more than 15 character then it will print dots after 15 chars

                return (
                  //here used navlink because we want click on movie card and display personal movie details 
                  
                //when open single movie details at time it will show movie and movie id in the url
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                       
                        <h2>
                         
                          {" "}
                          {movieName.length > 13
                            ? `${movieName}...` //print name of movie
                            : movieName}{" "}
                        </h2>{" "}
                        
                        {/* print poster */}
                        {/* //fetch poster based on availibility and NA */}
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                        
                        {/* //print year  */}
                        <p> {Year} </p>{" "} 
                      </div>{" "}
                    </div>{" "}
                  </NavLink>
                );
              })
            : ""}{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default Movie;
