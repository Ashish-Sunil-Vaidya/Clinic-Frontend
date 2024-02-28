import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext(null);
export const GlobalProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [tabValue, setTabValue] = useState("Home");
  return (
    <GlobalContext.Provider
      value={{
        isMobile,
        setIsMobile,
        tabValue,
        setTabValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  if (!useContext(GlobalContext)) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return useContext(GlobalContext);
};

export default GlobalProvider;
