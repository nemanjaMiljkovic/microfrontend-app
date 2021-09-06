import { createStore } from "redux";

const initialState = {
  products: [],
  isAuthenticated: false,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "authStatus":
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
