import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./App/Page/Home/Home";
import About from "./App/Page/About/About";
import Navbar from "./loyout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
