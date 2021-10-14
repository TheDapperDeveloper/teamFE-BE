import React from "react";

import "./Teams.css";

import { useDispatch } from "react-redux"
import BackEnd from "../redux/reducers/backEnd";
export default function NoTeam(props) {
  const { student } = props;
  const dispatch = useDispatch()

  return (
    <div>
      <h1>No Team</h1>
      <div className="no-team">
        {student?.map((student, index) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>

              <button onClick={() => dispatch(BackEnd)}>Team Frontend</button>
              <button>Team Backend</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
