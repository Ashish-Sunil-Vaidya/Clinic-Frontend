import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useGlobalContext = () => {
  if (!useContext(GlobalContext)) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return useContext(GlobalContext);
};

export default useGlobalContext;
