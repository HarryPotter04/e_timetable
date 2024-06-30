import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


export const getFacultys = createAsyncThunk('get/facultys', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/faculties/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})

const facultySlice = createSlice({
    name: 'faculty',
    initialState: {
        facultys: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getFacultys.fulfilled, (state, action) => {
            state.loading = false;
            state.facultys = action.payload
        })
            .addCase(getFacultys.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getFacultys.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export const facultyState = (state) => state.timetable.faculty
export default facultySlice.reducer;