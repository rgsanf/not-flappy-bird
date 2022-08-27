import React from "react";
import Clouds from "./Clouds";
import Goose from "./Goose";
import Pipes from "./Pipes";
import Ground from "./Ground";
import Highscore from "./Highscore";

export default function Level() {
  return (
    <>
      <Highscore />
      <Clouds />
      <Pipes>
        <Goose />
      </Pipes>
      <Ground />
    </>
  );
}
