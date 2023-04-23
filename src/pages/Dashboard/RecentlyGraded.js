import React from "react";
import sty from "./RecentlyGraded.module.scss";
import data from "../../data/dashboard.json";
import { RecentlyGradedCard } from "../../Components/Card/Dashboard";

export const RecentlyGraded = () => {
  return (
    <div className={sty.container}>
      <h2>Recently Graded</h2>
      <div className={sty.container__cardHolder}>
        {data.RecentlyGraded.map((val, index) => (
          <RecentlyGradedCard
            name={val.subjectName}
            expNumber={val.expNumber}
            score={val.score}
            totalScore={val.totalScore}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyGraded;
