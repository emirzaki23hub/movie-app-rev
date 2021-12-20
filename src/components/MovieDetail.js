import React, { useState, useEffect } from "react";
import axios from "axios";
import { CloseButton, Col, Container } from "react-bootstrap";
import "../styles/Detail.css"


const MovieDetail = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=83b6585a`)
      .then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container className="con">
      <img
        className="img-poster"
        src={movieInfo?.Poster}
        alt={`The movie titled: ${movieInfo?.Title}`}
      ></img>
      <Col className="col">
        <div className="movie-name">
          {movieInfo?.Title}
          <br />
          <p
            style={{
              fontSize: "15px",
              opacity: "0.5",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <span> IMDB : {movieInfo?.imdbRating}</span>
          </p>
        </div>
        <div className="movie-info">
          <p>
            {" "}
            <span className="span">{movieInfo?.Plot}</span>{" "}
          </p>
          <p>
            <span className="span">
              Runtime : {movieInfo?.Runtime} <br />
              Language : {movieInfo?.Language} <br />
              Genre : {movieInfo?.Genre} <br />
              Released : {movieInfo?.Released} <br /> Casts :{" "}
              {movieInfo?.Actors} <br /> Director : {movieInfo?.Director} <br />{" "}
              Production : {movieInfo?.Production}
            </span>
            <br />
          </p>
        </div>
      </Col>
      <CloseButton
        className="close"
        style={{ float: "right" }}
        onClick={() => props.onMovieSelect()}
      >X </CloseButton>
    </Container>
  );
};

export default MovieDetail;
