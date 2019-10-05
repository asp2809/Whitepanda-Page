import React from "react";
import styled from "styled-components";

import { FaRegBell } from "react-icons/fa";
import { Badge } from "antd";

const NotificationWrapper = styled.div`
  a {
    text-decoration: none;
    color: black;
    opacity: 0.6;
  }
`;

const NotificationIcon = props => {
  return (
    <NotificationWrapper {...props}>
      <a href="#">
        <Badge count={5}>
          <FaRegBell size={25} />
        </Badge>
      </a>
    </NotificationWrapper>
  );
};

export default NotificationIcon;
