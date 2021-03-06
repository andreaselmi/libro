import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  const { title, authors, img, id } = props;
  return (
    <Col sm={6} md={4} lg={3} className="d-flex">
      <Card
        className="mt-2"
        style={{
          width: "100%",
        }}
      >
        <Card.Img
          variant="top"
          style={{
            minHeight: "200px",
            objectFit: "cover",
          }}
          src={img}
        ></Card.Img>{" "}
        <Card.Body className="flex-fill">
          <Card.Title> {title} </Card.Title>{" "}
          <Card.Text>
            {" "}
            {authors.length > 1 ? authors[0] + " and others." : authors}{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={"/" + id.toString()}> More Details </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Book;
