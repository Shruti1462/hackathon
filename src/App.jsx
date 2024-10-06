import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/home";
import About from "./Components/Pages/About/about";
import Contact from "./Components/Pages/Contact/contact";
import Background from "./Components/Background.jsx";
import Lala from "./Components/lala"; 

const App = () => {
  const lalaData = [
    { text1: "Escape Reality", text2: "Dive into" },
    { text1: "Indulge", text2: "process" },
    { text1: "Deep beneath", text2: "the lives" },
  ];

  const [lalaCount, setLalaCount] = useState(0);
  const [PlayStatus, setPlayStatus] = useState(true);

  const togglePlayStatus = () => setPlayStatus(!PlayStatus);
  const nextLalaCount = () => setLalaCount((prevCount) => (prevCount + 1) % lalaData.length);

  return (
    <Router>
      <div>
        <Background PlayStatus={PlayStatus} lalaCount={lalaCount} /> 
        <Navbar />
        <Lala // Use the correct component
          setPlayStatus={setPlayStatus}
          lalaData={lalaData}
          lalaCount={lalaCount}
          setLalaCount={setLalaCount} // Corrected typo
          PlayStatus={PlayStatus} 
        />
        <button onClick={togglePlayStatus}>
          {PlayStatus ? "Pause Background" : "Play Background"}
        </button>
        <button onClick={nextLalaCount}>Next Background</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;