import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
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
    console.log(id);
  }, []);

  const noData = "Non disponibile";

  return (
    <Container className="d-flex">
      <Row>
        <Col md={6} className="text-center">
          <Image
            style={{ width: "100%" }}
            src={_.get(id, "imageLinks.medium", noImg)}
            rounded
          />
        </Col>
        <Col md={6}>
          <Card bg="Light" style={{ width: "100%" }} className="mb-2">
            <Card.Header>{_.get(id, "title", noData)}</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>{_.get(id, "description", noData)}</Card.Text>
              <ul style={{ listStyle: "none" }}>
                <li>
                  Data di pubblicazione:
                  {" " + _.get(id, "publishedDate", noData)}
                </li>
                <li>
                  Pubblicato da:
                  {" " + _.get(id, "publisher", noData)}
                </li>
                <li>
                  Book Link:
                  <a href={" " + _.get(id, "canonicalVolumeLink", noData)}>
                    {" " + _.get(id, "canonicalVolumeLink", noData)}
                  </a>
                </li>
                <li>
                  Numero di pagine:
                  {" " + _.get(id, "pageCount", noData)}
                </li>
              </ul>
            </Card.Body>
            <Card.Footer className="blockquote-footer">
              Autori: {_.get(id, "authors", noData)}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;

// {id ? (
//   <Card className="mt-2" style={{ maxWidth: "30rem" }}>
//     <Card.Img
//       variant="top"
//       style={{
//         minHeight: "200px",
//         objectFit: "cover",
//       }}
//     ></Card.Img>
//     <Card.Body className="flex-fill">
//       <Card.Title>  </Card.Title>
//       <Card.Subtitle className="mb-2 text-muted">
//
//       </Card.Subtitle>
//       <Card.Text></Card.Text>
//     </Card.Body>

//   </Card>
// ) : (
//   <p>Loading...</p>
// )}
