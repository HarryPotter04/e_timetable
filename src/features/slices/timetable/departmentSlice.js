import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/useAxios";
import { getErrorMessage } from "../../../utils/errorUtils";
import errorToast from "../../../utils/errorToast";
import successToast from "../../../utils/successToast";

export const getDepartments = createAsyncThunk(
  "get/departments",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("api/v1/departments/");
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const getDepartmentSearch = createAsyncThunk(
  "get/departmentsearch",
  async (search, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `api/v1/departments/?department=${search}`
      );
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const createDepartment = createAsyncThunk(
  "create/department",
  async (obj, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("api/v1/departments/", {
        name: obj.name,
        faculty: { name: obj.faculty },
      });
      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);
export const editDepartment = createAsyncThunk(
  "edit/department",
  async ({ id, values }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.put(`api/v1/department/${id}/`, {
        name: values.name,
        faculty: { name: values.faculty },
      });
      successToast(data.message);
      console.log(data);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

export const deleteDepartment = createAsyncThunk(
  "delete/department",
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(`api/v1/department/${id}/`);

      successToast(data.message);
      return data;
    } catch (error) {
      const errMsg = getErrorMessage(error);
      errorToast(errMsg);
      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const departmentSlice = createSlice({
  name: "department",
  initialState: {
    departments: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getDepartments.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDepartments.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getDepartmentSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getDepartmentSearch.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDepartmentSearch.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(createDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments.push(action.payload.data);
      })
      .addCase(createDepartment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createDepartment.rejected, (state) => {
        state.loading = false;
      })
      .addCase(editDepartment.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editDepartment.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.departments.findIndex(
          (entry) => entry.id === action.payload.id
        );

        if (index !== -1) {
          state.departments[index] = action.payload.data;
        }
      })
      .addCase(editDepartment.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteDepartment.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = state.departments.filter(
          (department) => department.id !== action.payload.id
        );
      })
      .addCase(deleteDepartment.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteDepartment.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const departmentState = (state) => state.timetable.department;
export default departmentSlice.reducer;
