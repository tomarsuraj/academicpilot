import React, { useState } from "react";
import { Link } from "react-router-dom";
import sty from "./SideBar.module.scss";
import DarkModeToggle from "react-dark-mode-toggle";
import {
  MdDashboard,
  MdAssignmentAdd,
  MdMenuBook,
  MdOutlineCalendarMonth,
  MdCalendarMonth,
  MdNoteAlt,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const SideBar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={sty.container}>
      <div className={sty.heading}>
        <h2>AcadmicPiolt</h2>
      </div>
      <div className={sty.body}>
        <div>
          <Link to="/" className={sty.link}>
            <MdDashboard />
            <p> Dashboard</p>
          </Link>
          <Link to="/assignments" className={sty.link}>
            <MdAssignmentAdd /> <p>Assignments </p>
          </Link>
          <Link to="/subjects" className={sty.link}>
            <MdMenuBook /> <p>Subjects </p>
          </Link>
          <Link to="/attendance" className={sty.link}>
            <MdCalendarMonth />
            <p>Attendance </p>
          </Link>
          <Link to="/calender" className={sty.link}>
            <MdOutlineCalendarMonth />
            <p>Calender </p>
          </Link>
          <Link to="/gradebook" className={sty.link}>
            <GiProgression />
            <p>Gradebook </p>
          </Link>
          <Link to="/notes" className={sty.link}>
            <MdNoteAlt />
            <p>Notes </p>
          </Link>
        </div>
        <div className={sty.body__bottom}>
          <DarkModeToggle
            onChange={setIsDark}
            checked={isDark}
            size={80}
            speed={2}
          />

          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
