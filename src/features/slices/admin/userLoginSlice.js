import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../../utils/errorUtils";
import axiosInstance from "../../../utils/useAxios";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";

export const logoutAction = () => {
  localStorage.removeItem("e-timetable-admin");
  localStorage.removeItem("active-admin");
  window.location.pathname = "/login";
};

export const login = createAsyncThunk("user/login", async (obj, thunkAPI) => {
  try {
    const { data } = await axiosInstance.post("api/v1/login/", obj);

    localStorage.setItem("e-timetable-admin", JSON.stringify(data));
    return data;
  } catch (error) {
    const errMsg = getErrorMessage(error);
    errorToast(errMsg);
    return thunkAPI.rejectWithValue(errMsg);
  }
});

const userLoginSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("e-timetable-admin")
      ? JSON.parse(localStorage.getItem("e-timetable-admin"))
      : null,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        successToast(action.payload.message);
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const userLoginState = (state) => state.admin.user;
export default userLoginSlice.reducer;
