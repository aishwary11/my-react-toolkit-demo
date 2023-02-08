import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, toastError, toastSuccess, toastWarn } from "../common/constant";

export const userInfo = createAsyncThunk("get/user", async () => {
  const { data } = await axiosInstance.get("/users");
  return data;
});

const initialState = [{
  id: "",
  name: ""
}];

const userSlicer = createSlice({
  name: "user",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userInfo.pending, (state) => {
        toastWarn("User Data Loading");
        return state = initialState;
      })
      .addCase(userInfo.fulfilled, (state, { payload }) => {
        toastSuccess("User Data");
        return state = payload;
      })
      .addCase(userInfo.rejected, (state) => {
        toastError("User Data Error");
        return state = initialState;
      });
  }
});

export default userSlicer.reducer;
