import { createContext, useState, useContext } from "react";

export const LoadProgressContext = createContext();

export const LoadProgressProvider = ({ children }) => {
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <LoadProgressContext.Provider value={{ loadProgress, setLoadProgress }}>
      {children}
    </LoadProgressContext.Provider>
  );
};

export const useLoadProgress = () => {
  return useContext(LoadProgressContext);
};
