import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";

export const getTimetable = createAsyncThunk(
  "get/timetable",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("api/v1/timetables/");
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const getTimetableSearch = createAsyncThunk(
  "get/timetablesearch",
  async (formValues, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `api/v1/timetables/?faculty=${formValues.faculty}&department=${formValues.department}&level=${formValues.level}&session=${formValues.session}&semester=${formValues.semester}`
      );
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const editTimetable = createAsyncThunk(
  "edit/timetable",
  async ({ id, values }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(`api/v1/timetable/${id}/`, {
        faculty: { name: values.faculty },
        department: { name: values.department },
        session: { years_name: values.session },
        level: { name: values.level },
        semester: { name: values.semester },
        day: { name: values.day },
        course: values.course,
        course_code: values.course_code,
        instructor: values.instructor,
        room: values.room,
        start_time: values.start_time,
        end_time: values.end_time,
      });
      successToast(data.message);
      return data;
    } catch (error) {
      console.log(error);
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const createTimetable = createAsyncThunk(
  "create/timetable",
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("api/v1/timetable/entry/", {
        faculty: { name: values.faculty },
        department: { name: values.department },
        session: { years_name: values.session },
        level: { name: values.level },
        semester: { name: values.semester },
        day: { name: values.day },
        course: values.course,
        course_code: values.course_code,
        instructor: values.instructor,
        room: values.room,
        start_time: values.start_time,
        end_time: values.end_time,
      });
      successToast(data.message);
      return data;
    } catch (error) {
      console.log(error);
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const deleteTimetable = createAsyncThunk(
  "delete/timetable",
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`api/v1/timetable/${id}/`);

      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const timetableSlice = createSlice({
  name: "timetable",
  initialState: {
    timetables: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTimetable.fulfilled, (state, action) => {
        state.loading = false;
        state.timetables = action.payload;
      })
      .addCase(getTimetable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTimetable.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTimetableSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.timetables = action.payload;
      })
      .addCase(getTimetableSearch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTimetableSearch.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createTimetable.fulfilled, (state, action) => {
        state.loading = false;
        state.timetables.push(action.payload.data);
      })
      .addCase(createTimetable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createTimetable.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(editTimetable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTimetable.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.timetables.findIndex(
          (entry) => entry.id === action.payload.id
        );

        if (index !== -1) {
          state.timetables[index] = action.payload.data;
        }
      })
      .addCase(editTimetable.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTimetable.fulfilled, (state, action) => {
        state.loading = false;
        state.timetables = state.timetables.filter(
          (timetable) => timetable.id !== action.payload.id
        );
      })
      .addCase(deleteTimetable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTimetable.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const timetableState = (state) => state.timetable.timetable;
export default timetableSlice.reducer;
