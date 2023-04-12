import React from 'react'
import sty from "./index.module.scss"
import Assignments from './Assignments'
import { RecentlyGraded } from './RecentlyGraded'
import { Attendance } from './Attendance'
import { Announcements } from './Announcements'
import TodayClasses from './TodayClasses'
import data from '../../data/dashboard.json'


const Dashboard = () => {
  return (
    <div className={sty.container}>
      <div className={sty.container__large}>
        <Assignments />
        <RecentlyGraded />
      </div>
      <div className={sty.container__small}>
        <Attendance />
        <Announcements />
      </div>
      <div className={sty.container__small}>
        <TodayClasses />
      </div>
    </div>
  )
}

export default Dashboard