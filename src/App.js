import React from "react";
import "./App.css";
import { UIContainer } from "./container";

// Store

// Router
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <UIContainer />
    </BrowserRouter>
  );
}

export default App;
