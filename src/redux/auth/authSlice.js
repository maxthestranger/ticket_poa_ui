import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  success: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    forgotPasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.success = true;
    },
    authError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const {
  authLoading,
  loginSuccess,
  registerSuccess,
  forgotPasswordSuccess,
  authError,
} = authSlice.actions;

export default authSlice.reducer;
