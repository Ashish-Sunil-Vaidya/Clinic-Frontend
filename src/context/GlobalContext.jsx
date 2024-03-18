import { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {

  const [tabValue, setTabValue] = useState("Dashboard");
  return (
    <GlobalContext.Provider
      value={{
        tabValue,
        setTabValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider;
