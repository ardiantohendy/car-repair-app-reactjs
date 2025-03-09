import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export const register = async (userData) => {
  return await axios.post(API_URL + "register/", userData);
};

export const login = async (userData) => {
  return await axios.post(API_URL + "login/", userData);
};

export const logout = async (refreshToken) => {
  return await axios.post(API_URL, "logout/", { refresh: refreshToken });
};
