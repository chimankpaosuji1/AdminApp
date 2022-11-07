import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];
const Chart = () => {
  
  return (
    <div className="chart">
        <div className="chartContainer">
          <div className="chartDate">
            Today: 5, August 2018
          </div>
          <form  className="chartMonth">
              <select id="show"classname="show" >
                  <option value="volvo">1 Jan - 1 Jun</option>
                  <option value="saab">1 Jul - 1 Dec</option>
              </select>
          </form>
          <div className="chartNav">
              <div className="iconNav">
                  <ArrowBackIosIcon className="icon"/>
              </div>
              <div className="iconNav">
                  <ArrowForwardIosIcon className="icon"/>
              </div>                        
          </div>
      </div>
      <div className="chartContainer1" aspect={2 / 1}>
      <ResponsiveContainer width="100%" >
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart