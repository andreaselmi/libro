import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const MyFooter = () => {
  return (
    <Styles style={{ marginTop: "auto" }}>
      <footer className="footer d-flex align-items-center">
        <Container>
          <Row>
            <Col> Progetto React per Start2Impact </Col>
            <Col className="text-right"> &copy; Andrea Selmi - 2020 </Col>
          </Row>
        </Container>
      </footer>
    </Styles>
  );
};

const Styles = styled.div`
  .footer {
    min-width: 100%;
    margin-top: 20px;
    font-family: nunito, "sans-serif";
    font-size: 0.7rem;
    height: 3rem;
    background: rgba(242, 123, 28, 1);
    background: radial-gradient(
      circle,
      rgba(242, 123, 28, 1) 0%,
      rgba(159, 116, 134, 1) 100%
    );
  }
`;

export default MyFooter;
