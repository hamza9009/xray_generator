import Medicineinput from "./MedicineInput";
import Data from "./Reportdata";
import  { useEffect, useState } from "react";
import React from "react";
// import './HistoryCard.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faMinus } from "@fortawesome/free-solid-svg-icons";

import "./HistoryCard.css";
export default function MedicineCard() {
  //const plus = <FontAwesomeIcon icon={faPlus} style={{ color: "red" }} />;
  //const minus = <FontAwesomeIcon icon={faMinus} style={{ color: "red" }} />;

  const [data, setTata] = useState([]);

  const [bool, setbool] = useState(0);
  const [boolsubmit, setBoolSubmit] = useState(0);
  const [boolremove, setBoolRemove] = useState(0);

  function loaddata() {
    setTata(
      Data.map(function (value, label) {
        return value;
      })
    );
  }
  useEffect(() => {
    loaddata();
  }, []);

  // function reportlist(){
  //   console.log("hamza");
  //   return(
  //   )
  //   // console.log("hamza");
  //   );
  // }
  function createlist(data) {
    return (
      <Medicineinput
        // id={data.id}
        med_name={data.med_name}
        quantity={data.quantity}
        timing={data.timing}
      />
      // console.log('hamza')
    );
  }

  function inputremove() {
    setbool(0);
  }

  const [med_name, setInputText] = useState("");
  const [quantity, setquantity] = useState("");
  const [timing, settiming] = useState("");
  // const [key,setkey] = useState("");

  function handlechange(event) {
    const newitem = event.target.value;
    setInputText(newitem);
    console.log(med_name);
  }
  function handlechange2(event) {
    const newitem = event.target.value;
    setquantity(newitem);
    console.log(med_name);
  }
  function handlechange3(event) {
    const newitem = event.target.value;
    settiming(newitem);
    console.log(med_name);
  }

  const [inputid, setinputid] = useState("");

  function handlechangeremove(event) {
    const newitem = event.target.value;
    setinputid(newitem);
    console.log();
  }

  function setinput() {
    setbool(1);
    setBoolSubmit(1);
  }

  function setremove() {
    setBoolRemove(1);
  }
  function additem() {
    console.log(data[0]);
    setTata((prevItems) => {
      return [...prevItems, { med_name, quantity, timing }];
    });
    console.log(data);
    setInputText("");
    setquantity("");
    settiming("");
    setBoolSubmit(0);
    setbool(0);
  }

  function remove() {
    
      // inputid > 0 ? data.splice(inputid, 1) : "";
      data.splice(inputid, 1)
    setinputid("");
    setBoolRemove(0);
  }

  return (
    <>
      <div className="History-card">
        <h1>Medicine history</h1>
        <table>
          <tr>
            <th>Medicine</th>
            <th>Quantity</th>
            <th>Timing</th>
          </tr>

          {data.map(createlist)}
        </table>
        <button className="btn-add" onClick={setinput}>
          Add Medicine
        </button>
        <button className="btn-add" onClick={setremove}>
          Remove Medicine
        </button>
      </div>
      <div className="inputbox">
        {bool ? (
          <div>
            <label for="medname"> Medicine name</label>
            <input
              className="input-text"
              type="text"
              value={med_name}
              onChange={handlechange}
            ></input>
            <label for="quantity"> Quantity</label>
            <input
              className="input-text"
              type="text"
              value={quantity}
              onChange={handlechange2}
            ></input>
            <label for="timing"> Timing</label>
            <input
              className="input-text"
              type="text"
              value={timing}
              onChange={handlechange3}
            ></input>
          </div>
        ) : (
          ""
        )}
        {boolsubmit ? (
          <button className="input-btn" onClick={additem}>
            Submit
          </button>
        ) : (
          ""
        )}

        {boolremove ? (
          <div>
            <input
              className="input-text"
              type="text"
              placeholder="input the id(index)"
              value={inputid}
              onChange={handlechangeremove}
            />
          </div>
        ) : (
          ""
        )}

        {boolremove ? (
          <button className="input-btn" onClick={remove}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
