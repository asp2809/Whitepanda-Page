import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  transition: all 0.5s;
  padding: ${props => props.padding};
  font-weight: ${props => props.fontWeight};
  letter-spacing: 0.3px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.color};
    color: white;
  }
`;

const Button = props => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;

Button.propTypes = {
  borderRadius: PropTypes.string,
  fontWeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func // Should be isRequired but since its not given what to do onClick, leaving it
};

Button.defaultProps = {
  borderRadius: "3px",
  backgroundColor: "inherit",
  border: "1.2px solid #3ebcb3",
  color: "#3ebcb3",
  fontSize: "1rem",
  padding: "0.3rem 2.5rem",
  fontWeight: "500"
};
