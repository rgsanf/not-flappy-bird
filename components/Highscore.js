import React, { useState, useEffect, useContext } from "react";
import { Gameover } from "../context/Gameover";

export default function Highscore() {
  const [highscore, setHighscore] = useState(0);
  const [gameover, _] = useContext(Gameover);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameover) {
        setHighscore(highscore + 25);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [highscore, setHighscore, gameover]);

  return (
    <div className="text-xl fixed top-2 left-2 text-purple-900 font-bold z-50 uppercase">
      Score: {highscore}
    </div>
  );
}
