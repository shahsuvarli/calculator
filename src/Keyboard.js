import { createContext, useContext, useReducer } from "react";
import { appContext, initialState } from "./Calculator";
import { keys } from "./keys";

export default function Keyboard() {
  const initialState = useContext(appContext);

  function reducer(state, action) {
    switch (action.type) {
      case "NUMBER":
        console.log(state);
        return { ...state, valueOnHold: action.payload };
    }
  }

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
}
