import { createContext } from "react";

export const initialState = {
  firstValue: undefined,
  secondValue: undefined,
  operation: undefined,
  result: undefined,
  inputValue: "",
  placeholder: "enter first value",
};

export const appContext = createContext(initialState);

export const Reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      if (!state.operation) {
        return {
          ...state,
          inputValue: state.inputValue + action.payload.name,
        };
      } else if (state.operation) {
        return { ...state, inputValue: state.inputValue + action.payload.name };
      }

    case "EQUAL":
      if (
        state.firstValue &&
        state.operation &&
        (state.inputValue || state.secondValue)
      ) {
        return {
          ...state,
          result: eval(
            (state.result || state.firstValue) +
              state.operation +
              (state.secondValue || state.inputValue)
          ),
          secondValue: state.inputValue || state.secondValue,
          firstValue: state.result || state.firstValue,
          inputValue: "",
        };
      } else {
        return state;
      }

    case "CLEAR":
      return initialState;

    case action.type:
      if (state.inputValue && !state.secondValue) {
        return {
          ...state,
          operation: action.payload.name,
          firstValue: state.inputValue,
          inputValue: "",
          placeholder: "enter second value",
        };
      } else {
        return { ...state, operation: action.payload.name };
      }
    default:
      return state;
  }
};
