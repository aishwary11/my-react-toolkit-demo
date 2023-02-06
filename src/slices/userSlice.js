import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, toastError, toastSuccess } from "../common/constant";

export const userInfo = createAsyncThunk("get/user", async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
});

const initialState = [{
  id: "",
  name: ""
}];

const userSlicer = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder.addCase(userInfo.pending, (state, { payload }) => {
      toastSuccess("User Data Loading");
      return state = payload;
    });
    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      toastSuccess("User Data");
      return state = payload;
    });
    builder.addCase(userInfo.rejected, (state) => {
      toastError("User Data Error");
      return state = initialState;
    });
  }
});

export default userSlicer.reducer;
