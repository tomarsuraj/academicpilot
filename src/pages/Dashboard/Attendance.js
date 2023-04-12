import React from 'react'
import sty from './Attendance.module.scss'
import { RecentlyGradedCard } from '../../Components'
export const Attendance = () => {
    return (
        <div className={sty.container}>
            <h2>Attendance</h2>
            <div className={sty.container__attendance} >

            </div>
        </div>
    )
}
