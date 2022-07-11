import { useReducer, useRef, useState } from "react";
import { Button } from "./Button.styled";
import { keys } from "./keys";
import { initialState, Reducer } from "./provider";

export default function Calculator() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const valueRef = useRef();
  console.log(state);

  return (
    <div className="main">
      <div className="screen">
        <h1>
          <input
            dir="rtl"
            ref={valueRef}
            placeholder={state.placeholder}
            value={state.result || state.inputValue}
            onChange={() => console.log("first")}
          />
        </h1>
      </div>
      <div className="keyboard">
        {keys.map((key) => (
          <button
            key={key.id}
            id={key.id}
            className={key.type.toLowerCase()}
            onClick={() => dispatch({ type: key.type, payload: key })}
          >
            {key.name}
          </button>
        ))}
      </div>
    </div>
  );
}
