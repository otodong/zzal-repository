import React from "react";
import "./App.css";
import { UIContainer } from "./container";

// Store
import { TempProvider } from "./contexts";

// Router
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <TempProvider>
      <BrowserRouter>
        <UIContainer />
      </BrowserRouter>
    </TempProvider>
  );
}

export default App;
