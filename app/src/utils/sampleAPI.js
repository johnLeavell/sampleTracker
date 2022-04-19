import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const sampleAPI = {
  findSamples: function () {
    return axios.get(`${API_URL}/api/samples`);
  },

  addSample: function (sample) {
    return axios.post(`${API_URL}/api/sample`);
  },

  updateSample: function (id) {
      return axios.put(`${API_URL}/api/sample/${id}`, sample)
  },
  deleteSample: function (id) {
      return axios.delete(`${API_URL}/api/sample/${id}`, id)
  }
};

export default sampleAPI;
