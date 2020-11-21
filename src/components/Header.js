import React, { useContext } from "react";
import { Jumbotron, Container, Form } from "react-bootstrap";
import styled from "styled-components";
import books from "../img/books.png";
import MyButton from "./Button";
import { BookContext } from "../context/BookContext";
import { Redirect } from "react-router-dom";

const Header = () => {
  const {
    search,
    getSearch,
    fetchData,
    startIndex,
    restartIndex,
    isLoading,
    error,
    errorMessage,
  } = useContext(BookContext);

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
          <span>
            {error ? (
              <p style={{ margin: "0", color: "red" }}>{errorMessage}</p>
            ) : (
              ""
            )}
          </span>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                value={search}
                onChange={getSearch}
                type="text"
                placeholder="es. Madame Bovary"
                style={{ maxWidth: "25rem" }}
              />
              <Form.Text className="text-muted">
                "Un libro è un amico che non inganna mai."
              </Form.Text>
            </Form.Group>
            <div style={{ display: "flex" }}>
              <MyButton text="Search"></MyButton>
              {isLoading ? (
                <p style={{ margin: "8px 0 0 10px" }}>Loading...</p>
              ) : (
                <Redirect to="/" />
              )}
            </div>
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
