import { useReducer } from "react";
import { keys } from "./keys";
import { initialState, Reducer } from "./provider";

export default function Calculator() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  console.log(state);
  return (
    <div className="main">
      <div className="screen">
        <h1>
          {typeof state.result === "number"
            ? state.result
            : state.secondValue
            ? state.secondValue
            : state.firstValue}
        </h1>
      </div>
      <div className="keyboard">
        {keys.map((key) => (
          <button
            key={key.id}
            className={key.type.toLowerCase()}
            onClick={() => dispatch({ type: key.type, payload: key })}
          >
            {key.name}
          </button>
        ))}
      </div>
      {typeof initialState.firstValue}
    </div>
  );
}
