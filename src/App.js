import React from "react";
import intro from "./components/intro";
import footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <intro />
      </div>
      <footer />
    </div>
  );
}

export default App;