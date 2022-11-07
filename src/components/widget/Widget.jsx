import React from "react";
import './widget.scss';

const Widget = ({type}) => {
  let data;
  
  switch (type) {
    case "user":
      data = {
        title:"Daily Transaction Volume",
        counter: 2342,
      };
      break;
      case "order":
        data = {
          title:" Daily Transaction Value",
          counter: "N4,000,000",
        };
        break;
        case "earning":
          data = {
            title:"Total Transaction Volume",
            counter: "452,000",
          };
          break;
          case "balance":
            data = {
              title:"Total Transaction Value",
              counter: "N4,000,000",
            }
            break;
            default:
              break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
      </div>
      <div className="right">
      <img
              src={require('../../images/grafticon.png')}
              alt="grafticon"
              className="grafticon"
            />
      </div>
    </div>
  )
}

export default Widget