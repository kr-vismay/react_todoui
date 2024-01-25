import React from "react";
import './Data.css';
function Data({todoData,todoDate}){

return(
    <>
    <div className="container text-center">
    <div className="row">
      <div className="col-4"><p>{todoData}</p></div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2"><button className="remove">Remove</button></div>
    </div>
  </div>
    </>
);
}

export default Data;