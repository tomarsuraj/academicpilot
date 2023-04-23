import React from 'react'
import sty from "./RecentlyGradedCard.module.scss"
import { MdAssignmentAdd } from 'react-icons/md';
const RecentlyGradedCard = ({ name, expNumber, score, totalScore }) => {
    return (
        <div className={sty.container}>
            <div className={sty.container__left}>
                <div className={sty.iconContainer}>
                    <MdAssignmentAdd size={24} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>Experiment {expNumber}</p>
                </div>
            </div>
            <div className={sty.container__right}>
                <h3>{score}/{totalScore}</h3>
            </div>
        </div>
    )
}

export default RecentlyGradedCard