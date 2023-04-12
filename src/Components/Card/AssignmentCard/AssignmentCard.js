import React from 'react'
import sty from "./AssignmentCard.module.scss"
import { MdAssignmentAdd } from 'react-icons/md';

const AssignmentCard = ({ name, expNumber, duedate }) => {
    const date = new Date(duedate);
    return (
        <div className={sty.container}>
            <div className={sty.container__left}>
                <div className={sty.iconContainer}>
                    <MdAssignmentAdd size={24} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{date.toDateString()}, {date.toLocaleTimeString()} </p>
                </div>
            </div>
            <div>
                <button>Submit Now</button>
                <p>Experiment {expNumber}</p>
            </div>
        </div>
    )
}

export default AssignmentCard