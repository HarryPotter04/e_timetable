import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";


export const getDepartments = createAsyncThunk('get/departments', async (_, thunkAPI) => {
    try {
        const {data} = await axiosInstance.get('api/v1/departments/')
        return data
    }catch (error) {
        const errMsg = getErrorMessage(error);
        errorToast(errMsg);
        return thunkAPI.rejectWithValue(errMsg);
    }
})

const departmentSlice = createSlice({
    name: 'department',
    initialState: {
        departments: [],
        loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getDepartments.fulfilled, (state, action) => {
            state.loading = false;
            state.departments = action.payload
        })
            .addCase(getDepartments.pending, (state, action) => {
            state.loading = true;
        })
            .addCase(getDepartments.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export const departmentState = (state) => state.timetable.department
export default departmentSlice.reducer;