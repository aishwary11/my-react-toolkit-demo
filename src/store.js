import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import postReducer from "./slices/postSlice";
import userReducer from "./slices/userSlice";
const reducer = {
  post: postReducer,
  user: userReducer
};
const store = configureStore({
  reducer,
  devTools: true,
  /**
   * @Logger_Middleware
   */
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export default store;
