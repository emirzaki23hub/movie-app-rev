import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles/Movie.css";

const Movie = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="movie">
      {props.movies.map((movie, index) => (
        <Row className="row" key={index}>
          <Col className="column">
            <Card className="card">
              <div className="poster">
                <Card.Img
                  variant="top"
                  className="img"
                  src={movie.Poster}
                  alt={`The movie titled: ${movie.Title}`}
                  onClick={() => {
                    props.onMovieSelect(movie.imdbID);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </div>
              <Card.Body className="flex__card">
                <Card.Title className="text">
                  <p>{movie.Title}</p> <br />
                </Card.Title>
                <Card.Text className="info">
                  <span> Year: {movie.Year}</span>
                  <span> Type: {movie.Type}</span>
                </Card.Text>
                <div className="overlay"
                  onClick={() => {
                    props.handleFavouritesClick(movie);
                    window.scrollTo({ behavior: "smooth" });
                  }}
                >
                  <FavouriteComponent />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Movie;
