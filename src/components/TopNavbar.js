import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const H1 = styled.h1`
  color: #3c4859;
  font-family: "nunito";
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
`;

const TopNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "#DACCC8" }}>
      <Container>
        <Navbar.Brand className="navbar-brand">
          <H1>libro.</H1>
        </Navbar.Brand>
        <Navbar.Text>Powered by Google</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
