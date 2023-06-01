import React from "react";

export default function Projectcard(props) {
  // console.log(props.blockNum, props.description);
  return (
    <div className={`block ${props.blockNum}`}>
      <div className="hoverarea"></div>
      <div className="card-content">
        <div className="card-front">
          <div className="card-title">{props.title}</div>
        </div>
        <div className="card-back">
          {props.description},
          <div className="know_more c1" type="button">
            Tech Stack
            <hr
              style={{
                size: "1",
                width: "10%",
                color: "white",
                className: "divider",
              }}
            />
            <div style={{position:"absolute",top:"110%"}}>{props.techstack}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
