import React from "react";
import './Option.css'
function Option(){
return(
    <>
    <div className="container text-center">
    <div className="row">
      <div className="col-4">
      <input type="text" placeholder="Enter Your Data"></input></div>
      <div className="col-4"><input type="date"></input></div>
      <div className="col-2"><button id="add"> Add</button></div>
    </div>
  </div>
    </>
);
}
export default Option;