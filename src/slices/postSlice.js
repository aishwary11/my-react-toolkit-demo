import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, toastError, toastSuccess, toastWarn } from "../common/constant";

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
    builder.addCase(postInfo.pending, (state) => {
      toastWarn("Post Data Loading");
      return state = initialState;
    });
    builder.addCase(postInfo.fulfilled, (state, { payload }) => {
      toastSuccess("Post Data");
      return state = payload;
    });
    builder.addCase(postInfo.rejected, (state) => {
      toastError("Post Error");
      return state = initialState;
    });
  }
});

export default postSlicer.reducer;
