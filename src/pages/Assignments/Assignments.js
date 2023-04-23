import React from "react";
import sty from "./Assignments.module.scss";
import AssignmentCard from "../../Components/Card/Assignments/AssignmentCard";

import data from "../../data/dashboard.json";
const Assignments = () => {
  return (
    <div className={sty.container}>
      <div className={sty.container__topBar}>
        <p>My Assignmenst</p>
        <div className={sty.container__topBar__right}>
          <div>
            <p>Sort BY:</p>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <p>Sort BY:</p>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div>
            <p>Sort BY:</p>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className={sty.container__body}>
        {data.Assignment.map((val) => {
          return (
            <AssignmentCard
              name={val.subjectName}
              expNumber={val.expNumber}
              dueDate={val.dueDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Assignments;
