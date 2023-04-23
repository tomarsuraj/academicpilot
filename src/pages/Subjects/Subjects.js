import React from "react";
import SubjectCard from "../../Components/Card/Subjects/SubjectCard";
import sty from "./Subjects.module.scss";
import data from "../../data/subjects.json";
const Subjects = () => {
  return (
    <div className={sty.container}>
      <h2>My Subjects</h2>
      <div className={sty.container__cardHolder}>
        {data.SubjectList.map((value, index) => (
          <SubjectCard
            name={value.subjectName}
            attendance={value.attandacePercentage}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
