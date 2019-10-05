import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SidebarItemWrapper = styled.div`
  border-right: ${props =>
    props.isActive ? `2px solid ${props.borderColor}` : null};
  padding: 1rem 0;
  text-align: center;
  * {
    color: ${props => (props.isActive ? `${props.borderColor}` : null)};
  }
`;

const SidebarItem = props => {
  return <SidebarItemWrapper {...props}>{props.children}</SidebarItemWrapper>;
};

export default SidebarItem;

SidebarItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  borderColor: PropTypes.string
};

SidebarItem.defaultProps = {
  borderColor: "#3ebcb3"
};
