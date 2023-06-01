import { React, useState, useEffect } from "react";
import Footer from "../components/footer";
import Projectcard from "../components/projectcard";
import projects from "../data";
import "../styleSheets/ProjectStyle.css";
import RouterButton from "../components/routerbutton";
import ReaddListeners from "../componentLogic/Project-script";


export default function Projects() {
  useEffect(() => {
    ReaddListeners();
  }, []);
  
  return (
    <div>

      <div className="navbar">

            <RouterButton title="Back to Home" path='/' />

        <div className="scroller">
          <div className="smalldivi divi1">1</div>
          <div className="smalldivi divi2">2</div>
          <div className="smalldivi divi3">3</div>
          <div className="smalldivi divi4">4</div>
          <div className="smalldivi divi5">5</div>
        </div>
        <div className="routers">
          <RouterButton title="About" path="/about"/>
        </div>
      </div>
      <div className="container">
        {projects.map((e, index) => (
          <Projectcard
            key={index}
            title={e.Name}
            blockNum={`block-` + (index + 1)}
            description={e.Info}
            techstack={e.techStack}
          />
        ))}
      </div>
      <div className="Info">
        <div className="A">
          <p>A</p>
          <p>Completed</p>
          <p className="Date"></p>
        </div>
        <div className="B">
          <p>B</p>
          <p>Type</p>
          <p className="Type"></p>
        </div>
        <div className="C">
          <p>C</p>
          <p>Role</p>
          <p className="Role"></p>
        </div>
        <div className="D">
          <p>D</p>
          <p>Client</p>
          <p className="Client"></p>
        </div>
      </div>
      <div className="Explore">Explore</div>
      <div className="line"></div>
      <div className="brief"></div>
      <Footer />
    </div>
  );
}
