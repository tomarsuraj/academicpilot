import React from "react";
import sty from "./ProgressBar.module.scss";

const ProgressBar = ({ title, fillPercent, type }) => {
  return (
    <div className={sty.container}>
      <div className={sty.container__text}>
        <p>{title}</p>
        <p>{fillPercent}%</p>
      </div>
      <div className={sty.container__slider}>
        <div className={type === "success" ? sty.success : sty.netural}>
          <div
            className={sty.fill}
            style={{
              width: `${fillPercent}%`,
            }}
          ></div>
          <div
            className={sty.total}
            style={{
              width: `${100 - fillPercent}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
