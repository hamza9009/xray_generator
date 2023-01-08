// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  { useState } from "react";
import React from "react";
// import Data from "./Reportdata";
export default function ReportHeader() {
  // const search = <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />;

  const [searchinput, setSearchinput] = useState("");

  function handlechange(event) {
    const newitem = event.target.value;
    setSearchinput(newitem);
    console.log(searchinput);
  }

  //    function Search(){
  //     let obj = Data.filter(o => o.med_name === {searchinput});

  // console.log(obj);
  //    }

  return (
    <>
      <div className="head-report">
        <div>
          <p>overview</p>
          <br />
          <h1>Report</h1>
        </div>
        <div className="example" action="">
          {/* <input
            type="text"
            placeholder="Search medicine.."
            name="search"
            onChange={handlechange}
          />
          <button type="submit"></button> */}
        </div>
        <button className="btn-report">Back</button>
      </div>
    </>
  );
}
