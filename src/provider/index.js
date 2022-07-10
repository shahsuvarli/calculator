import { init } from "@emailjs/browser";
import { createContext, useRef } from "react";

export const initialState = {
  firstValue: undefined,
  secondValue: undefined,
  operation: undefined,
  result: undefined,
  inputValue: "",
};

export const appContext = createContext(initialState);

export const Reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      if (!state.operation) {
        return { ...state, inputValue: state.inputValue + action.payload.name };
      } else {
        state.inputValue = "0";
        return { ...state, inputValue: state.inputValue + action.payload.name };
      }
    case "EQUAL":
      console.log(state);
      return state;
    case "CLEAR":
      return initialState;
    case action.type:
      if (state.inputValue) {
        return {
          ...state,
          operation: action.payload.name,
          firstValue: state.inputValue,
        };
      } else {
        return initialState;
      }
      return {
        ...state,
        operation: action.payload.name,
      };
  }
};
