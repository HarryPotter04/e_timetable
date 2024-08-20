import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";


export const getSemesters = createAsyncThunk('get/semesters', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/semesters/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})


export const createSemester = createAsyncThunk(
    "create/semester",
    async (obj, thunkAPI) => {
      try {
        const { data } = await axiosInstance.post("api/v1/semesters/", obj);
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );
  
  export const deleteSemester = createAsyncThunk(
    "delete/semester",
    async (id, thunkAPI) => {
      try {
        const { data } = await axiosInstance.delete(`api/v1/semester/${id}/`);
  
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );
  

const semesterSlice = createSlice({
    name: 'semester',
    initialState: {
        semesters: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getSemesters.fulfilled, (state, action) => {
            state.loading = false;
            state.semesters = action.payload
        })
            .addCase(getSemesters.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getSemesters.rejected, (state, action) => {
            state.loading = false;
        })
        .addCase(createSemester.fulfilled, (state, action) => {
            state.loading = false;
            state.semesters.push(action.payload.data);
          })
          .addCase(createSemester.pending, (state) => {
            state.loading = true;
          })
          .addCase(createSemester.rejected, (state) => {
            state.loading = false;
          })
          .addCase(deleteSemester.fulfilled, (state, action) => {
            state.loading = false;
            state.semesters = state.semesters.filter(
              (semester) => semester.id !== action.payload.id
            );
          })
          .addCase(deleteSemester.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(deleteSemester.rejected, (state, action) => {
            state.loading = false;
          })
    }
})

export const semesterState = (state) => state.timetable.semester
export default semesterSlice.reducer;