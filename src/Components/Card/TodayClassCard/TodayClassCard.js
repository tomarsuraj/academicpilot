import React from 'react'
import sty from './TodayClassCard.module.scss'
const TodayClassCard = ({ name, time }) => {
    return (
        <div className={sty.container}>
            <h3>{name}</h3>
            <div >
                <button>Join Leature</button>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default TodayClassCard