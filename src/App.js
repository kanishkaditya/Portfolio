import MainScreen from "./screens/main.js";
import Cursor from "./components/cursor.js";
import Projects from "./screens/projects.js";
import { Routes, Route} from "react-router-dom";
import About from "./screens/about.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {

  return (
    <div>
      <div className="right-layer"/>
      <div className="left-layer"/>
      <Cursor />
      <Routes>
          <Route path="/" exact element={<MainScreen />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
