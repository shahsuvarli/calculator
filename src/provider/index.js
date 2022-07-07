import { createContext, useRef } from "react";

export const initialState = {
  firstValue: undefined,
  secondValue: undefined,
  operation: undefined,
  result: undefined,
  input: () => useRef(0),
};

export const appContext = createContext(initialState);

export const Reducer = (state, action) => {
  let typeOfLastItem = typeof parseInt(action.payload.name);
  switch (action.type) {
    case "NUMBER":
      if (typeof state.result !== "number") {
        return {
          ...state,
          firstValue: !(typeof state.firstValue === "string")
            ? action.payload.name
            : state.firstValue,
          secondValue:
            typeof state.firstValue === "string"
              ? action.payload.name
              : undefined,
        };
      } else {
        return {
          ...state,
          secondValue: action.payload.name,
          result: undefined,
        };
      }
    case "EQUAL":
      let result =
        !typeof state.secondValue === "string"
          ? 0
          : eval(state.firstValue + state.operation + state.secondValue);
      return {
        ...state,
        firstValue: result,
        result: result === Math.round(result) ? result : result.toPrecision(2),
      };
    case "CLEAR":
      return initialState;
    case action.type:
      return {
        ...state,
        operation: action.payload.name,
      };
  }
};
