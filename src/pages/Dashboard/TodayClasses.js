import React from 'react'
import sty from './TodayClasses.module.scss'
import TodayClassCard from '../../Components/Card/TodayClassCard/TodayClassCard'
const TodayClasses = () => {
    return (
        <div className={sty.container}>
            <h2>What's Today?</h2>
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />
            <TodayClassCard />

        </div>
    )
}

export default TodayClasses