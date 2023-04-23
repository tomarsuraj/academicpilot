import React from "react";
import sty from "./AssignmentCard.module.scss";
import { MdAssignmentAdd } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const AssignmentsCard = ({ name, expNumber, dueDate }) => {
  const date = new Date(dueDate);
  return (
    <div className={sty.container}>
      <div className={sty.container__title}>
        <div className={sty.container__title__iconContainer}>
          <MdAssignmentAdd />
        </div>
        <p>{name}</p>
      </div>

      <div className={sty.container__content}>
        <RxDotFilled size={30} className={sty.success} />
        <p>Experiment {expNumber}</p>
      </div>
      <div className={sty.container__content}>
        <RxDotFilled size={30} className={sty.danger} />

        <p>
          {date.toDateString()}, {date.toLocaleTimeString()}{" "}
        </p>
      </div>

      <hr />
      <div className={sty.container__bottom}>
        <button>Start</button>
        <div>
          <RxDotFilled size={30} className={sty.warn} />
          <p>Panding</p>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsCard;
