import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";

export const getFacultys = createAsyncThunk(
  "get/facultys",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("api/v1/faculties/");
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const createFaculty = createAsyncThunk(
  "create/faculty",
  async (obj, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("api/v1/faculties/", obj);
      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);
export const editFaculty = createAsyncThunk(
  "edit/faculty",
  async ({ id, values }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(`api/v1/faculty/${id}/`, values);
      successToast(data.message);
      console.log(data)
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const deleteFaculty = createAsyncThunk(
  "delete/faculty",
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`api/v1/faculty/${id}/`);

      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const facultySlice = createSlice({
  name: "faculty",
  initialState: {
    facultys: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getFacultys.fulfilled, (state, action) => {
        state.loading = false;
        state.facultys = action.payload;
      })
      .addCase(getFacultys.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFacultys.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createFaculty.fulfilled, (state, action) => {
        state.loading = false;
        state.facultys.push(action.payload.data);
      })
      .addCase(createFaculty.pending, (state) => {
        state.loading = true;
      })
      .addCase(createFaculty.rejected, (state) => {
        state.loading = false;
      })
      .addCase(editFaculty.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editFaculty.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.facultys.findIndex(
          (entry) => entry.id === action.payload.id
        );

        if (index !== -1) {
          state.facultys[index] = action.payload.data;
        }
      })
      .addCase(editFaculty.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteFaculty.fulfilled, (state, action) => {
        state.loading = false;
        state.facultys = state.facultys.filter(
          (faculty) => faculty.id !== action.payload.id
        );
      })
      .addCase(deleteFaculty.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteFaculty.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const facultyState = (state) => state.timetable.faculty;
export default facultySlice.reducer;
