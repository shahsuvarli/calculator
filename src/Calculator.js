import { createContext, useReducer, useState } from "react";
import { keys } from "./keys";

export const initialState = {
  value: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "NUMBER":
      console.log(state);
      return { ...state, valueOnHold: action.payload };
  }
}

export const appContext = createContext({});

export default function Calculator() {
  return (
    <div className="main">
      <Screen />
      <Keyboard />
    </div>
  );
}

const Screen = () => {
  return (
    <div className="screen">
      <h1>{initialState.value}</h1>
    </div>
  );
};

const Keyboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button
          key={key.id}
          className={key.type.toLowerCase()}
          onClick={() => dispatch({ type: key.type, payload: key.value })}
        >
          {key.name}
        </button>
      ))}
    </div>
  );
};
