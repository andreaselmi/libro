import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";
import noImg from "../img/no-image.jpg";

const Details = (props) => {
  const { setError, displayError } = useContext(BookContext);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        setError(false);
        let newId = JSON.parse(props.match.params.details_id);
        const result = await axios(
          "https://www.googleapis.com/books/v1/volumes/" + newId
        );
        setId(result.data.volumeInfo);
      } catch (err) {
        setError(true);
        displayError();
      }
    };
    fetchDataById();
  }, [props.match.params.details_id, displayError, setError]);

  return (
    <Container className="d-flex">
      {id ? (
        <Card className="mt-2" style={{ maxWidth: "30rem" }}>
          <Card.Img
            variant="top"
            style={{
              minHeight: "200px",
              objectFit: "cover",
            }}
            src={_.get(id, "imageLinks.medium", noImg)}
          ></Card.Img>
          <Card.Body className="flex-fill">
            <Card.Title> {_.get(id, "title", "non disponibile")} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {_.get(id, "description", "non disponibile")}
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer className="blockquote-footer">
            Autori: {_.get(id, "authors", "Non disponibile")}
          </Card.Footer>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default Details;
