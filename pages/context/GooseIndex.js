import { createContext, useState } from "react";

export const GooseIndex = createContext();

export const GooseIndexProvider = ({ children }) => {
  const [gooseIndex, setGooseIndex] = useState();
  return (
    <GooseIndex.Provider value={[gooseIndex, setGooseIndex]}>
      {children}
    </GooseIndex.Provider>
  );
};
