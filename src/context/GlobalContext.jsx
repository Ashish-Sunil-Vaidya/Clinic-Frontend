import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {

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
        setExpirationTime
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export default GlobalProvider;
