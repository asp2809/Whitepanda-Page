import React from "react";
import styled from "styled-components";
import Card from "../common/Card";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Grid = props => {
  return (
    <GridWrapper {...props}>
      {props.cardData.map(data => (
        <Card title={data.title} price={data.price} content={data.content} />
      ))}
    </GridWrapper>
  );
};

export default Grid;
