import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from './auth'




//pass configureStore a configuration object where we set a reducer property
//we can also create a map of reducers
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
