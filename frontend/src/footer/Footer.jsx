/* eslint-disable no-unused-vars */
// src/Footer.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            {/* Update the "About Us" link to use Link component */}
            <li>
              <Link to="/about-us">about us</Link>
            </li>
            <li>
              <a href="#">our services</a>
            </li>
            <li>
              <Link to="/privacy&policy" >Privacy & Policy</Link>
            </li>
            <li>
              <a href="#">visit website</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">shipping</a>
            </li>
            <li>
              <a href="#">returns</a>
            </li>
            <li>
              <a href="#">order status</a>
            </li>
            <li>
              <a href="#">payment options</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li>
              <a href="#">download</a>
            </li>
            <li>
              <a href="#">changelog</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">all version</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
