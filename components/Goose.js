import React, { useEffect, useState, useContext } from "react";
import { Gameover } from "../context/Gameover";
import { GooseIndex } from "../context/GooseIndex";
const gooseSize = 4;

export default function Goose() {
  const [y, setY] = useState(50);
  const gooseSpeed = 2.5;
  const [gameover, setGameover] = useContext(Gameover);
  const [_, setGooseIndex] = useContext(GooseIndex);
  const [mouseDown, setMouseDown] = useState(false);
  // useEffect(() => {
  //   function handleClick() {
  //     if (!gameover) {
  //       setY(y - gooseSize * 2);
  //     }
  //   }
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [y, setY, gameover]);
  useEffect(() => {
    function handleMouseDown() {
      if (mouseDown !== true) {
        setMouseDown(true);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [mouseDown, setMouseDown, gameover]);
  useEffect(() => {
    function handleMouseDown() {
      if (mouseDown !== true) {
        setMouseDown(true);
      }
    }
    document.addEventListener("touchstart", handleMouseDown);
    return () => {
      document.removeEventListener("touchstart", handleMouseDown);
    };
  }, [mouseDown, setMouseDown, gameover]);
  useEffect(() => {
    function handleMouseUp() {
      setMouseDown(false);
    }
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [setMouseDown, gameover]);
  useEffect(() => {
    function handleMouseUp() {
      setMouseDown(false);
    }
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [setMouseDown, gameover]);

  // useEffect(() => {
  //   const holdingMouse = setInterval(() => {
  //     if (mouseDown) {
  //       setY(y - gooseSize * 2);
  //     }
  //   }, 50);
  //   return () => clearInterval(holdingMouse);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameover) {
        if (mouseDown) {
          setY(y - gooseSpeed);
        } else {
          setY(y + gooseSpeed);
        }
      }
    }, 40);
    return () => clearInterval(interval);
  }, [y, setY, gameover, mouseDown]);

  useEffect(() => {
    if (y < 10 - gooseSize || y > 86 - gooseSize) {
      setGameover(true);
    } else {
      setGooseIndex(y);
      console.log(y);
    }
  }, [y, setY, setGooseIndex, setGameover]);
  const defaultStyles = "w-[4vw] h-[4vw] inset-[48%]";
  return (
    <div
      className={`w-[${gooseSize}vw] h-[${gooseSize}vw] fixed inset-[${
        (100 - gooseSize) / 2
      }%] flex justify-center items-center transition-all duration-100 z-50 select-none `}
      style={{ top: y + "%" }}
    >
      <img
        src="/image/best-goose-drawing-ever.com-i-like-pinaple-on-pizza.png"
        alt="best goose"
        className="select-none "
      />
    </div>
  );
}
