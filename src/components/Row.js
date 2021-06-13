import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import "../styles/Row.css";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);
  console.log(movies);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h2
        style={{
          paddingLeft: "12px",
        }}
      >
        {title}
      </h2>
      <div className="row_posters">
        {movies.map((movie, index) => {
          if (movie?.poster_path != null && movie?.backdrop_path != null) {
            return (
              <img
                className={`row_poster  ${isLarge ? "row_banner" : ""}`}
                key={index}
                src={`${base_url}${
                  isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie.name}
              ></img>
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Row;
