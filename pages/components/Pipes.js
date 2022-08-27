import React, { useState, useEffect, useContext } from "react";
import { Gameover } from "../context/Gameover";
import { GooseIndex } from "../context/GooseIndex";
const gooseSize = 4;
const pipeGap = gooseSize * 10;
export default function Pipes({ children }) {
  const [pipes, setPipes] = useState([
    { x: 99, height: 55 },
    { x: 132, height: 12 },
    { x: 165, height: 38 },
  ]);
  const [gameover, setGameover] = useContext(Gameover);
  const [gooseIndex, setGooseIndex] = useContext(GooseIndex);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!gameover && pipes.length > 0) {
        const _pipes = [...pipes];
        let i = 0;
        for await (const pipe of pipes) {
          _pipes[i].x = pipe.x - 1;
          if (pipe.x - 1 - 5 < -10) {
            _pipes[i].x = 100;
            _pipes[i].height = Math.floor(Math.random() * 50) + 10;
          }
          i++;
          setPipes(_pipes);
        }
      }
    }, 25);
    return () => clearInterval(interval);
  }, [pipes, setPipes, gameover]);

  useEffect(() => {
    pipes.forEach((pipe) => {
      const botPipe = 10 + pipe.height;
      const topPipe = botPipe + pipeGap / 2;
      if (
        (topPipe < 100 - gooseIndex - gooseSize / 2 ||
          botPipe > 100 - gooseIndex - gooseSize / 2) &&
        pipe.x > 50 - gooseSize / 2 &&
        pipe.x < 50 + gooseSize / 2
      ) {
        setGameover(true);
      }
    });
  }, [pipes, gooseIndex, setGameover]);

  return (
    <div className="pointer-events-none">
      {children}
      <div className="w-full relative">
        {pipes.map((pipe, i) => {
          return (
            <React.Fragment key={i}>
              <div
                className="w-[5%] bg-pink-400 fixed top-[10%] z-50 pointer-events-none"
                style={{
                  height: 100 - pipe.height - pipeGap + "%",
                  left: pipe.x + "%",
                }}
              ></div>
              <div
                className="w-[5%] bg-pink-400 fixed bottom-[10%] z-50"
                style={{ height: pipe.height + "%", left: pipe.x + "%" }}
              ></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
