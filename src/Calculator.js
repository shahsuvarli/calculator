import React from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

export default function Calculator() {
  return (
    <div className="main">
      <Screen />
      <Keyboard />
    </div>
  );
}
