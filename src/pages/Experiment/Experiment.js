import React from "react";
import sty from "./Experiment.module.scss";
import {
  MdKeyboardArrowRight,
  MdKeyboardBackspace,
  MdAttachFile,
} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
const Experiment = () => {
  return (
    <div className={sty.container}>
      <div className={sty.container__heading}>
        <MdKeyboardBackspace />
        <p>Assignment</p> <MdKeyboardArrowRight />
        <p>Machine Learning</p>
      </div>
      <div className={sty.row}>
        <div className={sty.assignmentQuestion}>
          <h3>Expriment 1.2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Velit id elit feugiat massa
            a viverra in. Erat tristique ullamcorper eget venenatis sit
            ullamcorper. Consequat sed etiam eu mauris diam aliquam mauris
            pulvinar. Morbi elementum in sit tempus pharetra. Mauris dictum
            cursus dictum sed tortor risus venenatis pellentesque porta. Aenean
            velit nulla purus egestas at egestas rhoncus morbi. Netus bibendum
            accumsan arcu velit donec faucibus. Diam vitae nibh eget pulvinar
            orci hac tincidunt. Mauris nisl ut faucibus a blandit ultrices sit
            molestie congue. Vitae mi etiam tortor nibh tempor turpis. Consequat
            id porta accumsan urna leo.
          </p>
        </div>
        <div className={sty.assignmentDetail}>
          <p>Assignment Details </p>
          <div>
            <p>Time Limit</p>
            <p>30 min</p>
          </div>
          <div>
            <p>Attempt Left</p>
            <p>3</p>
          </div>
          <div>
            <p>Due by</p>
            <p>02/03/2023</p>
          </div>
          <div>
            <p>Max Marks</p>
            <p>20</p>
          </div>
        </div>
      </div>

      <div className={sty.row}>
        <div className={sty.editor}>
          <p>Editor</p>
        </div>

        <div className={sty.subbmission}>
          <div>
            {" "}
            <div className={sty.subbmission__attachFile}>
              <MdAttachFile />
              <p>Attach File</p>
              <p>Browse or Drop files in the Box</p>
            </div>
            <div className={sty.subbmission__attachFileDetails}>
              <p>File Attached (3 Max)</p>

              <div>
                <p>Expriment Code</p>
                <RxCross1 />
              </div>

              <div>
                <p>Expriment Code</p>
                <RxCross1 />
              </div>
            </div>
          </div>

          <button>Submit Assignment</button>
        </div>
      </div>
    </div>
  );
};

export default Experiment;
