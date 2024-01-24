import React from "react";
import './Data.css';
function Data(){

return(
    <>
    <div className="container text-center">
    <div className="row">
      <div className="col-4"><p> data-1</p></div>
      <div className="col-4">24/01/2024</div>
      <div className="col-2"><button className="remove">Remove</button></div>
    </div>
    <div className="row">
      <div className="col-4"><p> data-2</p></div>
      <div className="col-4">24/01/2024</div>
      <div className="col-2"><button className="remove">Remove</button></div>
    </div>
  </div>
    </>
);
}

export default Data;