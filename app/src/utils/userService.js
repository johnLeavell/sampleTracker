import axios from "axios";
import authHeader from "./authHeader";
const API_URL = process.env.REACT_APP_API_URL;

const getPublicContent = () => {
  return axios.get(API_URL + "api/users");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };
// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };
export default {
  getPublicContent,
  getUserBoard,
//   getModeratorBoard,
//   getAdminBoard,
};