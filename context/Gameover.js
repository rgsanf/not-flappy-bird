import { createContext, useState } from "react";

export const Gameover = createContext();

export const GameoverProvider = ({ children }) => {
  const [gameover, setGameover] = useState();
  return (
    <Gameover.Provider value={[gameover, setGameover]}>
      {children}
    </Gameover.Provider>
  );
};
