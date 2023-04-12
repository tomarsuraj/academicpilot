import React from 'react'
import { RecentlyGradedCard } from '../../Components'
import sty from './RecentlyGraded.module.scss'
import data from '../../data/dashboard.json'

export const RecentlyGraded = () => {
    return (
        <div className={sty.container}>
            <h2>Recently Graded</h2>
            <div className={sty.container__cardHolder}>
                {data.RecentlyGraded.map((val, index) =>
                    <RecentlyGradedCard name={val.subjectName} expNumber={val.expNumber} score={val.score} totalScore={val.totalScore}
                        key={index}
                    />
                )}
            </div>
        </div>
    )
}
