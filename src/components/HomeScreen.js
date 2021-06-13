import React from "react";
import "../styles/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../axios/request";
const HomeScreen = (props) => {
  return (
    <div className="homeScreen">
      {/*Nav*/}
      <Nav />
      {/*Banner*/}
      <Banner />
      {/*Row*/}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
