import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getErrorMessage } from "../../../utils/errorUtils";
import axiosInstance from "../../../utils/useAxios";
import successToast from "../../../utils/successToast";
import errorToast from "../../../utils/errorToast";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (obj, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`api/v1/register/`, {
        fullname: obj.fullname,
        email: obj.email,
        role: obj.role,
        password: obj.password,
      });

      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {},
  loading: false,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const registerState = (state) => state.admin.register;

export default registerSlice.reducer;
