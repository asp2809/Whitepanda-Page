import React from "react";
import styled from "styled-components";

import logo from "../../assets/img/whitepanda-logo.png";
import NotificationIcon from "./NotificationIcon";
import { Avatar } from "antd";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .logo {
    cursor: pointer;
    height: 1.5rem;
    display: flex;
    img {
      height: 1.5rem;
      width: auto;
    }
  }
  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
    .notification {
      margin-right: 1.7rem;
    }
    .profile {
      cursor: pointer;
    }
  }
`;

const Header = props => {
  return (
    <Wrapper {...props}>
      <div className="logo">
        <img src={logo} alt="whitepanda-logo" />
      </div>
      <div className="header-content">
        <div className="notification">
          <NotificationIcon notificationCount="588" />
        </div>
        <div className="profile">
          <Avatar
            size="large"
            style={{ color: "#fffff", backgroundColor: "#b3e77f" }}
          >
            AB
          </Avatar>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
