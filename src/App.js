import React from "react";
import "./App.css";
import { UIContainer } from "./container";

// Store
import { TempProvider } from "./contexts";

// Router
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TempProvider>
        <UIContainer />
      </TempProvider>
    </BrowserRouter>
  );
}

export default App;
