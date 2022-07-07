import { createContext } from "react";

export const initialState = {
  valueOnScreen: "",
  valueOnHold: 0,
  operation: "",
};

export const appContext = createContext(initialState);

export const Reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      return {
        ...state,
        valueOnHold: action.payload.value,
        valueOnScreen: action.payload.value,
      };
    case "ADDITION":
      return {
        ...state,
        valueOnHold: state.valueOnHold + action.payload.value,
        operation: "addition",
      };
    case "EQUAL":
      return state;
  }
};
