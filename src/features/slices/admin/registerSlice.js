import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getErrorMessage } from "../../../utils/errorUtils";
import axiosInstance from "../../../utils/useAxios";
import successToast from "../../../utils/successToast";
import errorToast from "../../../utils/errorToast";

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (obj, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`api/v1/register/`, obj);

      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const editUser = createAsyncThunk(
  "edit/user",
  async ({id, values}, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(`api/v1/users/${id}/`, values);
      
      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const deleteUser = createAsyncThunk("delete/user", async function(id, thunkAPI) {
  try {
    const { data } = await axiosInstance.delete(`api/v1/users/${id}/`);
    
    successToast(data.message);
    return data;
  } catch (error) {
    const errMsg = getErrorMessage(error);
    errorToast(errMsg);
    return thunkAPI.rejectWithValue(errMsg);
  }
})

export const getUsers = createAsyncThunk("get/users", async (_, thunkAPI) => {
  try {
    const { data } = await axiosInstance.get('api/v1/users/')
    return data

  }catch (error) {
    const errMsg = getErrorMessage(error);
    errorToast(errMsg);
    return thunkAPI.rejectWithValue(errMsg);
  }
})

const registerSlice = createSlice({
  name: "register",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload.data)
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload
      })
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(editUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (entry) => entry.id === action.payload.id
        );

        if (index !== -1) {
          state.users[index] = action.payload.data;
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (faculty) => faculty.id !== action.payload.id
        );
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
      });

  },
});

export const registerState = (state) => state.admin.register;

export default registerSlice.reducer;
