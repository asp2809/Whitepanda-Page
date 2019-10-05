import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Wrapper = styled.div`
  display: flex;
  .sidebar {
    position: fixed;
    left: 0;
    height: 100vh;
    width: 4.5rem;
    box-shadow: 2px 2px 2px #ddd;
    padding-top: 7rem;
  }
  .container {
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-left: 4.5rem;
    .header {
      padding: 0 12rem 0 7rem;
      min-height: 4rem;
      box-shadow: 2px 2px 2px #ddd;
      z-index: 10;
    }
    .content {
      padding: 0 12rem 0 7rem;
      background-color: #fdfdfd;
      flex: 1;
    }
  }
`;

const NavigationWrapper = props => {
  return (
    <Wrapper>
      <div className="sidebar">
        <Sidebar {...props} />
      </div>
      <div className="container">
        <div className="header">
          <Header {...props} />
        </div>

        <div className="content">{props.children}</div>
      </div>
    </Wrapper>
  );
};

export default NavigationWrapper;
