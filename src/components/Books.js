import React, { useContext, useEffect } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import _ from "lodash";
import noimage from "../img/no-image.jpg";

const Books = () => {
  const { books, fetchData, startIndex, getIndex } = useContext(BookContext);

  return (
    <>
      <Container>
        <Container>
          <Row>
            <Col>
              Risultati: {startIndex} - {startIndex + 10}
            </Col>
            <Col className="text-right">
              <button onClick={getIndex} value="+">
                +
              </button>
              <button onClick={getIndex} value="-">
                -
              </button>
            </Col>
          </Row>
        </Container>
        <CardGroup>
          <Row>
            {books.map((book) => (
              <Book
                key={book.id}
                title={_.get(book, "volumeInfo.title", "Non disponibile")}
                authors={_.get(book, "volumeInfo.authors", "Non disponibile")}
                img={_.get(
                  book,
                  "volumeInfo.imageLinks.smallThumbnail",
                  noimage
                )}
              />
            ))}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
};

export default Books;

{
  /* <i

  className="fas fa-arrow-left"
  value="2"
></i>
</label>

<i
onClick={getIndex}
className="fas fa-arrow-right"
value="1"
></i> */
}
