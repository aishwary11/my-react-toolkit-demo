import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, toastSuccess } from "../common/constant";

export const postInfo = createAsyncThunk("get/post", async () => {
  const res = await axiosInstance.get("/posts");
  return res.data;
});

const initialState = [{
  id: "",
  title: ""
}];

const postSlicer = createSlice({
  name: "post",
  initialState,
  extraReducers: builder => {
    builder.addCase(postInfo.fulfilled, (state, { payload }) => {
      toastSuccess("Post Data");
      return state = payload;
    });
    builder.addCase(postInfo.rejected, (state) => {
      toastSuccess("Post Data");
      return state = initialState;
    });
  }
});

export default postSlicer.reducer;
