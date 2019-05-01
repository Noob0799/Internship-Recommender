import React from "react";
import "./App.css";
import Main from "./Main";
import Head from "./Head";
function App() {
  return (
    <div className="App">
      <div className="head">
        <Head />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
