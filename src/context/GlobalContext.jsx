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
  return useContext(GlobalContext);
};

export default GlobalProvider;
