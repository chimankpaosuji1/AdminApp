import React from "react";
import './featured.scss';

const Featured = () => {
  return (
    <div className="featured">
      <div className="center">
        <div className="featuredContainer">
        <ul>
            <p className="title">Orders</p>
            <div>
            <img
              src={require('../../images/line.png')}
              alt="line"
              className="line"
            />
            </div>
          <li> 
            <span>Pending Orders: </span>
            <span className="col1">&nbsp;20</span>
          </li>          
          <li>
            <span>Reconcilled Orders: </span>
            <span className="col2">&nbsp;80</span>
          </li>
          <li>          
            <span>Total Orders: </span>
            <span className="col3">&nbsp;100</span>
          </li>
          </ul>
        </div>
         <div className="featuredContainer">
          <ul>
         <p className="title">Payments</p>
          <div>
            <img
              src={require('../../images/line.png')}
              alt="line"
              className="line"
            />
            </div>
          <li>
            <span>Un-reconcilled Payments: </span>
            <span className="col1">&nbsp;20</span>
          </li>
          <li>          
            <span>Reconcilled Payments: </span>
            <span className="col2">&nbsp;80</span>
          </li>
          <li>
            <span>Total Payments: </span>
            <span className="col3">&nbsp;100</span>
          </li>
        </ul>
          </div> 
         
        </div>
    </div>
  )
}

export default Featured