import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";


export const getLevels = createAsyncThunk('get/levels', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/levels/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})


export const createLevel = createAsyncThunk(
    "create/level",
    async (obj, thunkAPI) => {
      try {
        const { data } = await axiosInstance.post("api/v1/levels/", obj);
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );
  
  export const deleteLevel = createAsyncThunk(
    "delete/level",
    async (id, thunkAPI) => {
      try {
        const { data } = await axiosInstance.delete(`api/v1/level/${id}/`);
  
        successToast(data.message);
        return data;
      } catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
      }
    }
  );
  
const levelSlice = createSlice({
    name: 'level',
    initialState: {
        levels: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getLevels.fulfilled, (state, action) => {
            state.loading = false;
            state.levels = action.payload
        })
            .addCase(getLevels.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getLevels.rejected, (state, action) => {
            state.loading = false;
        })
        .addCase(createLevel.fulfilled, (state, action) => {
            state.loading = false;
            state.levels.push(action.payload.data);
          })
          .addCase(createLevel.pending, (state) => {
            state.loading = true;
          })
          .addCase(createLevel.rejected, (state) => {
            state.loading = false;
          })
          .addCase(deleteLevel.fulfilled, (state, action) => {
            state.loading = false;
            state.levels = state.levels.filter(
              (level) => level.id !== action.payload.id
            );
          })
          .addCase(deleteLevel.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(deleteLevel.rejected, (state, action) => {
            state.loading = false;
          })
    }
})

export const levelState = (state) => state.timetable.level
export default levelSlice.reducer;