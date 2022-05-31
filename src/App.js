import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro />
      </div>
      <div>
        <Navbar />
      </div>
      <Footer />
    </div>
  );
}

export default App;