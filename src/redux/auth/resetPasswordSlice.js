import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  success: false,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    resetPasswordLoading: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    resetPasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
    },
    resetPasswordError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  resetPasswordLoading,
  resetPasswordSuccess,
  resetPasswordError,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;
