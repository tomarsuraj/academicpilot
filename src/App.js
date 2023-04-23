import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, SideBar } from "./Components";
import {
  Assignments,
  Attendance,
  Calender,
  Gradebook,
  Dashboard,
  Notes,
  NotFound,
  Subjects,
} from "./pages";
import sty from "./App.module.scss";
const App = () => {
  return (
    <BrowserRouter>
      <div className={sty.container}>
        <div className={sty.sideBar}>
          <SideBar />
        </div>
        <div className={sty.body}>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/gradebook" element={<Gradebook />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
