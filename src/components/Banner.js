import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import requests from "../axios/request";
import "../styles/Banner.css";
const Banner = (props) => {
  function trancate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + ". . ." : string;
  }
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}") `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="banner_description">{trancate(movie?.overview, 150)}</h1>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
