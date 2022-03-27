import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const userAPI = {
  findUsers: function () {
    return axios.get(`${API_URL}/api/users`);
  },

  addUser: function (user) {
    return axios.post(`${API_URL}/api/user`);
  },

  updateUser: function (user) {
      return axios.put(`${API_URL}/api/user/${id}`, user)
  },
  
  deleteUser: function (id) {
      return axios.delete(`${API_URL}/api/user/${id}`, id)
  }
};

export default userAPI;
