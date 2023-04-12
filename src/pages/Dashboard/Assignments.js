import React from 'react'
import sty from './Assignments.module.scss'
import data from '../../data/dashboard.json'
import { AssignmentCard } from '../../Components'
const Assignments = () => {
    return (
        <div className={sty.container}>
            <h2>New Assignments</h2>
            <div className={sty.container__cardHolder}>

                {data.Assignment.map(
                    (val) => {
                        return <AssignmentCard name={val.subjectName} expNumber={val.expNumber} duedate={val.dueDate} />
                    }
                )}

            </div>
        </div>
    )
}

export default Assignments