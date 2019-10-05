import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FiGrid } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #aaa;
    cursor: pointer;
    width: 100%;
  }
`;

const Sidebar = props => {
  const { pathname } = props.location;
  console.log(pathname);
  return (
    <Wrapper {...props}>
      <SidebarItem isActive={pathname.includes("/home")}>
        <Link to={{ pathname: "/home" }}>
          <FiGrid size={25} />
        </Link>
      </SidebarItem>
      <SidebarItem isActive={pathname.includes("/search")}>
        <Link to={{ pathname: "/search" }}>
          <GoSearch size={25} />
        </Link>
      </SidebarItem>
      <SidebarItem isActive={pathname.includes("/store")}>
        <Link to={{ pathname: "/store" }}>
          <FaStore size={25} />
        </Link>
      </SidebarItem>
    </Wrapper>
  );
};

export default Sidebar;
