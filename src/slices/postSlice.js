import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const postInfo = createAsyncThunk("get/post", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postSlicer = createSlice({
  name: "post",
  initialState: [{
    id: "",
    title: ""
  }],
  extraReducers: builder => {
    builder.addCase(postInfo.fulfilled, (state, { payload }) => {
      toast("Posts", {
        autoClose: 3000,
        type: "success"
      });
      return state = payload;
    });
  }
});
export default postSlicer.reducer;
