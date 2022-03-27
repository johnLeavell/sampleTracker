import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "registeruser", {
    firstName,
    lastName,
    email,
    password,
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
