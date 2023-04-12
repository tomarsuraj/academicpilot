import React from 'react'
import sty from './TodayClassCard.module.scss'
const TodayClassCard = () => {
    return (
        <div className={sty.container}>
            <h3>Leature 4: EMBEDDED PROGRAMMING</h3>
            <div >
                <button>Join Leature</button>
                <p>9:00 am- 10:00 am</p>
            </div>
        </div>
    )
}

export default TodayClassCard