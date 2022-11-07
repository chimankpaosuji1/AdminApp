import React from "react";
import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <SearchOutlinedIcon className="icon"/>
          <input type="text" placeholder="Search..."/>
        </div>
        <div className="items">        
          <div className="item">
              Support
          </div>
          <div className="item">
              FAQ
          </div>
          <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">8</div>
          </div>
          <div className="item">
            <div className="name">
            <p className="paragraph">Hello</p>
            <span>Oluwaleke Ojo</span>
            </div>            
          </div>
          <div className="item">            
            <img
              src={require('../../images/profilepix.png')}
              alt="profilepix"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar