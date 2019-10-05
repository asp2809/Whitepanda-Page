import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import icon from "../../assets/img/card-icon.png";
import Button from "./Button";

const CardWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 2.7rem;
  &:hover {
    box-shadow: 0 0 3rem #eee;
    .card-header {
      .card-logo {
        background-image: none;
        background-color: #3ebcb3;
      }
      .card-header-info {
        .name {
          color: #3ebcb3;
        }
      }
    }
  }
  .card-header {
    display: flex;
    align-items: center;
    .card-logo {
      min-width: 4rem;
      min-height: 4rem;
      border-radius: 50%;
      margin-right: 1.5rem;
      background-image: url(${props => `${props.imgsrc}`});
      background-size: contain;
    }
    .card-header-info {
      .name {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
        line-height: 1.2rem;
      }
      .price {
        font-size: 0.9rem;
      }
    }
  }
  .card-content {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  .order-btn {
    button {
      width: initial;
    }
  }
`;

const Card = props => {
  return (
    <CardWrapper {...props}>
      <div className="card-header">
        <div className="card-logo"></div>
        <div className="card-header-info">
          <div className="name">{props.title}</div>
          <div className="price">from &#8377;{props.price}</div>
        </div>
      </div>
      <div className="card-content">{props.content}</div>
      <div className="order-btn">
        <Button onClick={() => null}>Order</Button>
      </div>
    </CardWrapper>
  );
};

export default Card;

Card.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  imgsrc: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

Card.defaultProps = {
  backgroundColor: "white",
  borderRadius: "5px",
  imgsrc: icon,
  height: "21.5rem",
  width: "21.5rem",
  margin: "2rem 0"
};
