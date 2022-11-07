import React from "react";
import './sidebar.scss';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">TransMonitor</span>
      </div>
      <hr/>
      <div className="general">
        <p className="generalinvoice">GENERAL INVOICE</p>
      </div>
      <div className="center">
        <ul>
            <p className="title">Main</p>
          <li>           
          < SpeedOutlinedIcon className="icon" />
            <span>Overview</span>
          </li>
          <p className="title">Payments</p>
          <li>          
          <PersonOutlineIcon className="icon" />
            <span>All Payments</span>
          </li>
          <li>
          <StoreIcon className="icon" />
            <span>Reconciled Products</span>
          </li>
          <li>
          <CreditCardIcon className="icon" />
            <span className="a1">Un-Reconciled Products</span>
          </li>
          <li>
          <LocalShippingIcon className="icon" />
            <span>Manual Settlement</span>
          </li>
          <p className="title">Orders</p>
          <li>          
          <InsertChartIcon className="icon" />
            <span>All Orders</span>
          </li>
          <li>
          <NotificationsNoneIcon className="icon" />
            <span>Pending Orders</span>
          </li>
          <li>
          <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Reconciled Orders</span>
          </li>
          <li>
          <PsychologyOutlinedIcon className="icon" />
            <span>Marchant Profile</span>
          </li>
        </ul>
        <div className="bottom">
         <div className="coloroption"></div>
         <div className="coloroption"></div>
      </div>
      </div> 
    </div>
  )
}

export default Sidebar