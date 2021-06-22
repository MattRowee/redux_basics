import { findRenderedComponentWithType } from "react-dom/test-utils";
import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  //every slice needs a name, can be any you want
  name: "counter",
  //next we set an initialState, if our const is the same name,
  // we dont need a colon and value
  initialState: initialCounterState,
  // an object or map of all the reducers this state slice needs
  //add methods with any name of your choice
  // redux will translate to immutable code
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //if we need some data thats attached to the action,
    // we can still accept it as a parameter and use it in the method
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//pass configureStore a configuration object where we set a reducer property
//we can also create a map of reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
