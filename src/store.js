import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import userReducer from "./slices/userSlice";
const reducer = {
  post: postReducer,
  user: userReducer
};
const store = configureStore({
  reducer,
  devTools: true
});

export default store;
