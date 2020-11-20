import React, { useContext, useEffect } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
import { CardGroup, Container, Row } from "react-bootstrap";
import _ from "lodash";
import noimage from "../img/no-image.jpg";

const Books = () => {
  const { books, fetchData } = useContext(BookContext);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
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
