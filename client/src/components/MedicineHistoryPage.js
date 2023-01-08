import "./styles.css";
// import Historycard from "./components/Historycard";
import ReportHeader from "./ReportHeader";
import MedicineCard from "./MedicineCard";
import React from "react";
export default function MedicineHistoryPage() {
  return (
 
  <div className="App" >
      <ReportHeader />
      <div className="body-report">
        <MedicineCard />
      </div>
    </div>
  );
}