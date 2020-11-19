import React from "react";
import { Jumbotron, Container, Form, Button } from "react-bootstrap";
import books from "../img/books.jpg";

const Header = () => {
  return (
    <Jumbotron
      fluid
      style={{
        backgroundImage: `url(${books}`,
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <Container>
        <h1
          style={{ color: "white", fontFamily: "nunito", fontSize: "2.5rem" }}
        >
          Cerca la tua prossima avventura...
        </h1>

        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="es. Madame Bovary"
              style={{ maxWidth: "500px" }}
            />
            <Form.Text className="text-muted">
              "Un libro è un amico che non inganna mai."
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    </Jumbotron>
  );
};

export default Header;
