import React from "react";
import ReactDOM from "react-dom";
import todo from "./todo.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <todo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
