import React from 'react'
import sty from './TodayClasses.module.scss'
import TodayClassCard from '../../Components/Card/TodayClassCard/TodayClassCard'

import data from './../../data/dashboard.json'
const TodayClasses = () => {
    return (
        <div className={sty.container}>
            <h2>What's Today?</h2>
            {data.todayClasses.map((value, index) => <TodayClassCard name={value.className} time={value.time} key={index} />)}

        </div>
    )
}

export default TodayClasses