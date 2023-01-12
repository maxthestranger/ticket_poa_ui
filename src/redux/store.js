import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import resetPasswordSlice from "./auth/resetPasswordSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    resetPassword: resetPasswordSlice,
  },
});

export default store;
