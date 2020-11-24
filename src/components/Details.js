import React, { useEffect, useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";
import noImg from "../img/no-image.jpg";

const Details = (props) => {
  const { setError, displayError } = useContext(BookContext);
  const [id, setId] = useState();
  const noData = "Dato non disponibile";

  useEffect(() => {
    let mounted = true;
    const fetchDataById = async () => {
      try {
        setError(false);
        let newId = props.match.params.details_id;
        const result = await axios(
          "https://www.googleapis.com/books/v1/volumes/" + newId
        );
        if (mounted) {
          setId(result.data.volumeInfo);
        }
      } catch (err) {
        setError(true);
        displayError();
      }
    };
    fetchDataById();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        <Col md={2} className="text-right">
          <Card>
            <Card.Img
              style={{
                height: "auto",
              }}
              src={_.get(id, "imageLinks.thumbnail", noImg)}
            ></Card.Img>
          </Card>
        </Col>
        <Col md={10}>
          <Card bg="Light" className="mb-2">
            <Card.Header> {_.get(id, "title", noData)} </Card.Header>
            <Card.Body>
              <Card.Title>
                Sottotitolo: {_.get(id, "subtitle", noData)}
              </Card.Title>
              <Card.Text>
                Descrizione: {_.get(id, "description", noData)}
              </Card.Text>
              <hr />
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li>Lingua: {" " + _.get(id, "language", noData)}</li>
                <li>
                  Data di pubblicazione:
                  {" " + _.get(id, "publishedDate", noData)}
                </li>
                <li>Pubblicato da: {" " + _.get(id, "publisher", noData)} </li>
                <li>
                  Numero di pagine: {" " + _.get(id, "pageCount", noData)}
                </li>
                <li>
                  Book Link:
                  <a href={" " + _.get(id, "canonicalVolumeLink", "")}>
                    {" " + _.get(id, "canonicalVolumeLink", noData)}
                  </a>
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
