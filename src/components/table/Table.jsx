import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const List = () => {
  const rows = [  
    {
      id:1,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:2,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Pending",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:3,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:4,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:5,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Pending",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:6,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Unreconcilled",
      arrow: (
        <KeyboardArrowDownIcon />
      ),
    },
    {
      id:7,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:8,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:9,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    {
      id:10,
      item: "Apple Mac Book 15” 250 SSD 12GB",
      img:  "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      price: "$73430",
      transaction: 1234567890,
      time: "12:30",
      status: "Reconciled",
      arrow: (
        <KeyboardArrowDownIcon/>
      ),
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background: " #EAEEF0"}}>            
            <TableCell className="tableCell">Item Type</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Transaction N0</TableCell>
            <TableCell className="tableCell">Time</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">
              
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>             
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.item}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.transaction}</TableCell>
              <TableCell className="tableCell">{row.time}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.status}`}>
                <span className="circle"></span> {row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                {row.arrow}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
