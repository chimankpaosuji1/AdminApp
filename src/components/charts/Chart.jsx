import "./chart.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "", Total: 800 },
  { name: "", Total: 1600 },
  { name: "", Total: 900 },
  { name: "", Total: 1700 },
  { name: "Jan", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "", Total: 800 },
  { name: "", Total: 1600 },
  { name: "", Total: 900 },
  { name: "", Total: 1700 },
  { name: "", Total: 1200 },
  { name: "Feb", Total: 2100 },
  { name: "", Total: 800 },
  { name: "", Total: 1600 },
  { name: "", Total: 900 },
  { name: "", Total: 1700 },
  { name: "", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "Mar", Total: 800 },
  { name: "", Total: 1600 },
  { name: "", Total: 900 },
  { name: "", Total: 1700 },
  { name: "", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "", Total: 800 },
  { name: "Apr", Total: 1600 },
  { name: "", Total: 900 },
  { name: "", Total: 1700 },
  { name: "", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "", Total: 800 },
  { name: "", Total: 1600 },
  { name: "Ma", Total: 1600 },
  { name: "", Total: 1700 },
  { name: "", Total: 1200 },
  { name: "", Total: 2100 },
  { name: "", Total: 800 },
  { name: "", Total: 1600 },
  { name: "", Total: 900 },
  { name: "Jun", Total: 1700 },
];

const Charts = ({ aspect, title }) => {
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


      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={200}
          height={50}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0294FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" offset="40px" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="linear"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
