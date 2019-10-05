import React from "react";
import styled from "styled-components";

import Button from "../common/Button";
import Grid from "./Grid";
import data from "./data.json";
import Footer from "../Footer/Footer";

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  .heading {
    font-size: 2rem;
    margin: 4.5rem 0;
  }
  .info {
    padding: 1.5rem;
    background-color: #f9fbfb;
    color: gray;
    margin-bottom: 2rem;
    .title {
      color: #3ebcb3;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
    .text {
      margin-bottom: 1.5rem;
      font-size: 0.9rem;
      a {
        text-decoration: underline;
        color: inherit;
      }
    }
  }
  .cards {
    margin-bottom: 2rem;
  }
`;

const Home = props => {
  return (
    <Wrapper {...props}>
      <div className="heading">Content Store</div>
      <div className="info">
        <div className="title">
          Got bulk orders or almost similar orders? Fill the order brief in an
          excel sheet
        </div>
        <div className="text">
          If you are wondering about an easy way to place orders in large
          numbers, we provide a way customized just for that.
          <br /> Download our excel sheet, and fill the order brief in the
          prescribed format and submit. In case you need any help,{" "}
          <a href="#">
            we
            <br /> are just a click away to assist you in placing your order
          </a>
        </div>
        <Button
          fontWeight="600"
          fontSize="0.9rem"
          padding="0.3rem 1.5rem"
          borderRadius="5px"
        >
          Order Via Excel Sheet
        </Button>
      </div>
      <div className="cards">
        <Grid cardData={data.cardData} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Home;
