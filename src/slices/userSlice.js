import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfo = createAsyncThunk("get/user", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const userSlicer = createSlice({
  name: "user",
  initialState: [],
  extraReducers: builder => {
    builder.addCase(userInfo.fulfilled, (state, { payload }) => state = payload);
  }
});

export default userSlicer.reducer;
