import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


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
    }
})

export const semesterState = (state) => state.timetable.semester
export default semesterSlice.reducer;