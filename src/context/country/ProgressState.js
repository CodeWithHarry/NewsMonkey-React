import ProgressContext from "./ProgressContext";
import { useState } from "react";

const ProgressState = (props) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {props.children}
    </ProgressContext.Provider>
  );
};
export default ProgressState;
