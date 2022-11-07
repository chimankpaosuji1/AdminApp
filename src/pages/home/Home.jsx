import React from "react";
import Chart from "../../components/chart/Chart";
import Charts from "../../components/charts/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import WidgetHeading from "../../components/WidgetHeading/WidgetHeading";
import './home.scss';
import Datatable from "../../components/datatable/Datatable";
import List from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
         <Charts />
        <Featured/>
      </div>
      <div className="listContainer">
          <WidgetHeading/>
          <List/>
        </div>
      </div>
      
      
    </div>
  )
}

export default Home