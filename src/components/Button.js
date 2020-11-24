import React from "react";

//style
import { Button } from "react-bootstrap";
import styled from "styled-components";

import PropTypes from "prop-types";

const MyButton = (props) => {
  return (
    <Styles>
      <Button className="my-btn" type="submit">
        {props.text}
      </Button>
    </Styles>
  );
};

const Styles = styled.div`
  .my-btn {
    background-color: #2a9ea8;
    border: none;
    &:hover {
      background-color: #008ea8;
    }
    &:active {
      background-color: #2a9ea8 !important;
    }
  }
`;

MyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MyButton;
