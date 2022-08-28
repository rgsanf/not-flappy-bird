import React, { useContext } from "react";
import { Gameover } from "../context/Gameover";
export default function GameoverScreen() {
  const [gameover, setGameover] = useContext(Gameover);

  if (gameover) {
    return (
      <div className="bg-slate-800/30 absolute flex h-screen w-screen justify-center items-center flex-col select-none">
        <div className="text-red-600  text-9xl font-bold z-50">Gameover</div>
        <button
          onClick={() => location.reload()}
          className="rounded-lg p-6 bg-red-600 text-white text-lg font-bold my-16 z-50"
        >
          Retry
        </button>
      </div>
    );
  } else {
    <></>;
  }
}
