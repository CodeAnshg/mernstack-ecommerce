import React from 'react';
import './Navbar.css';
import { FaOpencart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import Icon from "../assets/trolley.png"
const Navbar = () => {
  return (
    <>
      <div className='nav-1'>
        <div className="navbar-button">
          <LuPhone />
          +001234567890
        </div>
        <div className='shop-now'>
          <p>Get 50% off on seelected item   |  Shop Now</p>
        </div>
        <div className="navbar-button">
          <select className="dropdown">
            <option>Eng</option>
            <option>Hindi</option>
          </select>
          <select className="dropdown">
            <option>Location</option>
            <option>India</option>

          </select>
        </div>

      </div>
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-button">
            <img src={Icon} alt="icon" className='nav-icon' />
            <h2>Shopcart</h2>
          </div>
        </div>
        <div className="navbar-middle">
          <div className="navbar-button">
            <span className='arrow'>Categories<RiArrowDropDownLine /></span>
          </div>
          <div className="navbar-button">Deals</div>
          <div className="navbar-button">What's New</div>
          <div className="navbar-button">Delivery</div>
          <div className="nav2-search">
            <div class="search-box">
              <input type="text" class="search-input" placeholder="Search..." />
              <IoIosSearch className="search-btn" />
            </div>
          </div>
          <div className="navbar-button">
            <span className='arrow'> <RiAccountCircleFill /> Account</span>
          </div>
          <div className="navbar-button">
            <span className='arrow'> <FaOpencart /> Cart</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;