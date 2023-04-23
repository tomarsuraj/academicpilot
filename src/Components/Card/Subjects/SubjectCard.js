import React from "react";
import sty from "./SubjectCard.module.scss";
import { MdBook } from "react-icons/md";
import ProgressBar from "../../ProgressBar/ProgressBar";
const SubjectCard = ({ name, attendance }) => {
  return (
    <div className={sty.container}>
      <div className={sty.container__title}>
        <MdBook size={36} />
        <h3>{name}</h3>
      </div>
      <ProgressBar title="Attendance" type="success" fillPercent={attendance} />
      <div className={sty.container__btnContainer}>
        <button>Click to View</button>
      </div>
    </div>
  );
};

export default SubjectCard;
