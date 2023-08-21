import { createContext, useState, useContext } from "react";
import LoadingBar from "react-top-loading-bar";

export const LoadProgressContext = createContext();

export const LoadProgressProvider = ({ children }) => {
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <LoadProgressContext.Provider value={{ loadProgress, setLoadProgress }}>
      <LoadingBar height={3} color="#f11946" progress={loadProgress} />
      {children}
    </LoadProgressContext.Provider>
  );
};

export const useLoadProgress = () => {
  return useContext(LoadProgressContext);
};
