import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './widgetHeading.scss'

function WidgetHeading() {
  return (
    <div className='widgetHeading'>
        <h1 className='widgetshowpayment'>Payments</h1>
        <div className='widgetContainer'>
          <div className='widgetshow'>
              <div className='widgetshowing'>Showing</div>
              <div className='arrowspan'>
              <select id="show"classname="show" >
                  <option value="volvo"></option>
                  <option value="saab">1</option>
                  <option value="fiat">2</option>
                  <option value="audi">3</option>
                  <option value="audi">4</option>
              </select>
              </div>
              <div>out of 500 payments</div>          
          </div>
        <div className='search'>
            <SearchOutlinedIcon  className="icon"/>
            <input type="text" placeholder="Search Payments" />
        </div>
        <div className='widgetHeadcase'> 
          <form  className='widgetHeadshow'>
              <div>
                <label for="show">Show</label>
              </div>
              <div>
              <select id="show"classname="show" >
                  <option value="volvo">All</option>
                  <option value="saab">Unreconcilled</option>
                  <option value="fiat">Reconcilled</option>
                  <option value="audi">Settled</option>
                  <option value="audi">UnSettled</option>
              </select>
              </div>
          </form>
        </div>      
        </div>
    </div>
  )
}

export default WidgetHeading 







// {/* <div>
// <h1>payment</h1>
// </div>
// <div>
// <div className="listTitle">
//   <div className="titlesubtitle">
//     <p></p>
// <p>20</p>
// <KeyboardArrowDownIcon/>
// <p>Out of 500 payments</p>
//   </div>
// <div className="search">

// </div>
// <div >

// </div>
// </div>


// </div> */}

