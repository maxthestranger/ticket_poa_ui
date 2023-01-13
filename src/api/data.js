import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/auth",
});

export const login = (data) => api.post("/sign_in", data);
export const register = (data) => api.post("/", data);
export const forgotPassword = (data) => api.post("/forgot-password", data);
export const resetPassword = (data) => api.post("/reset-password", data);
