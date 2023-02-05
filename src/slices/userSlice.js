import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userInfo = createAsyncThunk("get/user", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const userSlicer = createSlice({
  name: "user",
  initialState: [{
    id: "",
    name: ""
  }],
  extraReducers: builder => {
    builder.addCase(userInfo.fulfilled, (state, { payload }) => {
      toast("User", {
        autoClose: 3000,
        type: "success"
      });
      return state = payload;
    });
  }
});

export default userSlicer.reducer;
