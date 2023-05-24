import React from "react";
import sty from "./AssignmentCard.module.scss";
import { MdAssignmentAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ name, expNumber, duedate, isQuiz }) => {
  const navigate = useNavigate();
  const date = new Date(duedate);

  return (
    <div
      className={sty.container}
      onClick={() => (isQuiz ? navigate("/quiz") : navigate("/experiment"))}
    >
      <div className={sty.container__left}>
        <div className={sty.iconContainer}>
          <MdAssignmentAdd size={24} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>
            {date.toDateString()}, {date.toLocaleTimeString()}
          </p>
        </div>
      </div>
      <div>
        <button>Submit Now</button>
        <p>
          {isQuiz ? "Quiz" : "Experiment"} {expNumber}
        </p>
      </div>
    </div>
  );
};

export default AssignmentCard;
