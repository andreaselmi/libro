import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";
import { CardGroup, Container, Row } from "react-bootstrap";
import _ from "lodash";
import noimage from "../img/no-image.jpg";
import ChangeIndex from "./ChangeIndex";

const Books = () => {
  const { books } = useContext(BookContext);

  return (
    <>
      <Container>
        <ChangeIndex />
        <CardGroup>
          <Row>
            {books ? (
              books.map((book) => (
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
              ))
            ) : (
              <h1 style={{ margin: "20px 0 0 20px" }}>No results</h1>
            )}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
};

export default Books;
