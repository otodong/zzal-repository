import React, { useState } from "react";

const TempContext = React.createContext(null);

const TempProvider = ({ children }) => {
  const [signin, setSignin] = useState(0);
  const store = {
    signin, setSignin
  };
  return <TempContext.Provider value={store}>{children}</TempContext.Provider>;
};

export { TempProvider, TempContext };
