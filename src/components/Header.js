import React, { useContext } from "react";
import { Jumbotron, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import books from "../img/books.png";
import MyButton from "./Button";
import { BookContext } from "../context/BookContext";

const Header = () => {
  const { search, getSearch, fetchData, startIndex, restartIndex } = useContext(
    BookContext
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    restartIndex();
    if (startIndex === 0) return fetchData();
  };

  return (
    <Styles>
      <Jumbotron fluid className="jumbo">
        <Container>
          <h1 className="jumbo__h1"> Cerca la tua prossima avventura... </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                value={search}
                onChange={getSearch}
                type="text"
                placeholder="es. Madame Bovary"
                style={{
                  maxWidth: "500px",
                }}
              />
              <Form.Text className="text-muted">
                "Un libro è un amico che non inganna mai."
              </Form.Text>
            </Form.Group>
            <MyButton text="Search"> </MyButton>
          </Form>
        </Container>
      </Jumbotron>
    </Styles>
  );
};

const Styles = styled.div`
  .jumbo {
    background-image: url(${books});
    background-position: center;
    background-size: cover;
    min-height: 500px;
  }
  .jumbo__h1 {
    color: white;
    font-family: nunito, "sans-serif";
    font-size: 2rem;
  }
`;

export default Header;
