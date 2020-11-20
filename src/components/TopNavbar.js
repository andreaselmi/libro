import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

const TopNavbar = () => {
  return (
    <Styles>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="navbar-brand navbar__h1">
            libro.
          </Navbar.Brand>
          <Navbar.Text>Powered by Google.</Navbar.Text>
        </Container>
      </Navbar>
    </Styles>
  );
};

const Styles = styled.div`
  .navbar__h1 {
    color: black;
    font-family: "nunito";
    font-weight: 400;
    font-size: 2rem;
    margin: 0;
  }
  .navbar {
    background: rgba(242, 123, 28, 1);
    background: radial-gradient(
      circle,
      rgba(242, 123, 28, 1) 0%,
      rgba(159, 116, 134, 1) 100%
    );
  }
`;

export default TopNavbar;
