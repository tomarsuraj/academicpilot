import React from "react";
import sty from "./AttendanceCard.module.scss";
const AttendanceCard = ({ name, total, present }) => {
  return (
    <div className={sty.container}>
      <p>{name}</p>
      <div className={sty.container__presentPer}>
        <p>{((present / total) * 100).toFixed(2)}%</p>
      </div>
      <div className={sty.container__detailContainer}>
        <div>
          <p>Total</p>
          <p>{total}</p>
        </div>
        <div className={sty.container__detailContainer__center}>
          <p>Present</p>
          <p>{present}</p>
        </div>
        <div>
          <p>Absent</p>
          <p>{total - present}</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
