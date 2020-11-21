import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BookContext } from "../context/BookContext";

const ChangeIndex = () => {
  const { startIndex, getIndex, books, error } = useContext(BookContext);
  return (
    <Container>
      <Row>
        <Col>
          Risultati: {startIndex} - {startIndex + 10}
        </Col>
        <Col className="text-right">
          <button
            disabled={error || !books}
            className="btn btn-outline-info"
            onClick={getIndex}
            value="-"
            style={{ width: "40px", marginRight: "10px" }}
          >
            -
          </button>
          <button
            disabled={error || !books}
            className="btn btn-outline-info"
            onClick={getIndex}
            value="+"
            style={{ width: "40px" }}
          >
            +
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangeIndex;
