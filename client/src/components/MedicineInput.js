import React from "react";
export default function Historyinput(props) {
  return (
    <>
      <tr>
        <td> { props.med_name} </td>
        <td> {props.quantity} </td>
        <td> {props.timing} </td>
      </tr>
    </>
  );
}
