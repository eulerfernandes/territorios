import React from "react";
import "./App.css";
import Admin from "./components/Admin";
import Bairros from "./components/Bairros";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Admin />
        <Bairros />
      </header>
    </div>
  );
}

export default App;
