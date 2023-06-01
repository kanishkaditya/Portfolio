import Tilt from "react-parallax-tilt";
import Footer from "../components/footer.js";
import "../styleSheets/Home.css";
import RouterButton from "../components/routerbutton.js";
export default function MainScreen() {
  return (
    <div>
      <div className="navbar">
        <RouterButton title="Kanisk" allowClick={false} />
        <div className="routers">
          <RouterButton title="About" path="/about" />
          <RouterButton title="Projects" path="/projects" />
        </div>
      </div>
      <Tilt
        className="card"
          // max= {10} // max tilt rotation (degrees)
          perspective= {500} // Transform perspective, the lower the more extreme the tilt gets.
          scale= {1} // 2 = 200%, 1.5 = 150%, etc.
        /> 
        <p className="description">
          Hi, I am Kanishkaditya,
          <br />
          a Web Developer and
          <br /> front-end designer
        </p>
        <p className="fact">My favourite color is Black</p>
      <Footer />
    </div>
  );
}
