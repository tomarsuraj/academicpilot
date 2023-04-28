import React from "react";
import sty from "./Attendance.module.scss";
import AttendanceCard from "../../Components/Card/Attendance/AttendanceCard";
import data from "../../data/Attendance.json";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

const Attendance = () => {
  return (
    <div className={sty.container}>
      <h2>My Attendance</h2>
      <div className={sty.container__attendanceCards}>
        {data.SubjectList.map((val, index) => (
          <AttendanceCard
            key={index}
            name={val.subjectName}
            total={val.total}
            present={val.present}
          />
        ))}
      </div>

      <div className={sty.container__body}>
        <div className={sty.container__body__applyForLeave}>
          <h3>Apply for Leave</h3>
          <div className={sty.container__body__applyForLeave__form}>
            <p>Form Heare</p>
          </div>
        </div>

        <div className={sty.container__body__details}>
          <div className={sty.container__body__details__head}>
            <div>
              <MdChevronLeft size={24} />
              <p>Today</p>
              <MdChevronRight size={24} />
            </div>
            <MdOutlineCalendarMonth size={24} />
          </div>

          {data.details.today.map((val, index) => (
            <div className={sty.container__body__details__card} key={index}>
              <p>{val.name}</p>
              <div>
                {val.isPresent ? (
                  <>
                    <RxDotFilled className={sty.success} />
                    <p className={sty.success}> Present</p>
                  </>
                ) : (
                  <>
                    <RxDotFilled className={sty.danger} />
                    <p className={sty.danger}>Absent</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
