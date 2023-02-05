import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postInfo = createAsyncThunk("get/post", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postSlicer = createSlice({
  name: "post",
  initialState: [],
  extraReducers: builder => {
    builder.addCase(postInfo.fulfilled, (state, { payload }) => payload);
  }
});
export default postSlicer.reducer;
