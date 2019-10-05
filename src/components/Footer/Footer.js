import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: #a6a6a6;
  align-items: center;
  transition: all 1s;
  font-size: 1rem;
  margin-bottom: 2rem;
  div {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .social-icons {
    width: 30%;
    display: flex;
    justify-content: space-between;
    svg:hover {
      color: gray;
      cursor: pointer;
    }
  }
  .company-links {
    letter-spacing: 0.3px;
    a {
      text-decoration: underline;
      color: inherit;
      &:hover {
        color: gray;
      }
    }
  }
`;

const Footer = props => {
  return (
    <Wrapper>
      <div className="social-icons">
        <FaTwitter size={30} />
        <FaLinkedinIn size={30} />
        <FaInstagram size={30} />
        <FaFacebookF size={30} />
      </div>
      <div className="copyright-info">
        Copyright @ 2019 White Panda Media Pvt. Ltd. <br />
        All rights reserved
      </div>
      <div className="company-links">
        <Link to="/">Terms of Service</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">Privacy Policy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">Service Agreement</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/">Contact Us</Link>
      </div>
    </Wrapper>
  );
};

export default Footer;
