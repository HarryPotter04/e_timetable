import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import errorToast from "../../../utils/errorToast";
import { getErrorMessage } from "../../../utils/errorUtils";

export const getUser = createAsyncThunk("getUser/user", async (_, thunkAPI) => {
  try {
    const { data } = await axiosInstance.get("api/v1/user/");
    localStorage.setItem("active-admin", JSON.stringify(data));
    return data;
  } catch (error) {
    const errMsg = getErrorMessage(error);
    errorToast(errMsg);
    return thunkAPI.rejectWithValue(errMsg);
  }
});

const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    userData: null,
  },
  loading: false,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loading = false;
      })
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const getUserState = (state) => state.admin.getUser;
export default getUserSlice.reducer;
