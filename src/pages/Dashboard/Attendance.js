import React from "react";
import sty from "./Attendance.module.scss";
import { ProgressBar } from "../../Components";
import data from "../../data/dashboard.json";
export const Attendance = () => {
  return (
    <div className={sty.container}>
      <h2>Attendance</h2>
      <div className={sty.container__attendance}>
        {data.Attendance.map((val, index) => (
          <ProgressBar
            title={val.className}
            fillPercent={val.attandacePercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
