import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {

<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("Dashboard");
=======
>>>>>>> 8a745eeff5b2f765d52ff5a82d66b2ba7f7d1893
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [expirationTime, setExpirationTime] = useState(Number(localStorage.getItem("expirationTime")))
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("expirationTime", expirationTime);
  }, [currentUser])


  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        expirationTime,
        setExpirationTime,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider;
