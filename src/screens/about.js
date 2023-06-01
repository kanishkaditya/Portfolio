import react from "react"
import RouterButton from "../components/routerbutton"
import Footer from "../components/footer";
import "../styleSheets/About.css";

export default function About()
{

return (<div>
    <div className="navbar">
      <RouterButton title="Back to Home" path="/" />
      <div className="routers">
          <RouterButton title="Projects" path="/projects" />
        </div>
      </div>
      <div id="app">
        <div className="title">
          <div className="title-inner">
            <div className="cafe">
              <div className="cafe-inner">I’m lucky because my work</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">is also one of my passions</div>
            </div>
          </div>
        </div>
        <div className="discription">
            I'm an android developer & data analyst living. I make android
            applications using java, flutter and ML projects using flutter and
            java. I am also an machine learning Enthusiast. Problem solving is
            also one of my skills. Check out my latest work on the portfolio page.
            Want to talk about a project? You can get in touch with me here.
        </div>
      </div>
      {/* <!-- <div className="Close"><button className="projects">Projects</button></div> --> */}

        <div className="contents">
      <div className="skills">
          <div className="colored_skills">
            Skills
        </div>
        <div className="skilldetails">
          The main area of my expertise is Flutter developement(Android as well
          as IOS).
          <br /><br />
          C++, Java, Python, Dart, Flutter, Machhine Learning, Deep learning,
          HTML, CSS, Javascript, animations, Competitive Programming
          <br /><br />
          Visit my <a href="https://www.linkedin.com/in/kanishkaditya-shukla-8031221ba/"
            >LinkedIn</a> profile 
            for more details or just <a href="shuklakanishkaditya12@gmail.com">contact</a> me
        </div>

        <div id="tags"></div>
      </div>
      {/* <div className="icons" style="display: flex; position:fixed; top: 90%; left: 1.3%; font-size:16px;">
        <i className="fa fa-envelope" onClick="window.location.href = 'shuklakanishkaditya12@gmail.com';" style="padding-left: 20px;transition: 500ms ease; "></i>
         <i className="fa fa-github" onClick="window.location.href = 'https://github.com/kanishkaditya';" style="padding-left: 30px;transition: 500ms ease;"></i>
       <i className="fa fa-linkedin" onClick="window.location.href = 'https://linkedin.com/in/kanishkaditya-shukla-8031221ba';"  style="padding-left: 30px;transition: 500ms ease;"></i>
       </div> */}
        </div>
        <Footer />
        </div>
        );
}