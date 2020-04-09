import axios from "axios";

export default {
  getAll: function (category) {
    return axios.get("http://localhost:3001/api/" + category);
  },

  getOne: function (category, id) {
    return axios.get("/api/" + id);
  },
  deleteOne: function (id) {
    return axios.delete("/api/" + id);
  },
  saveOne: function (data) {
    // console.log('API.js saveOne data: ', data)
    return axios.post("http://localhost:3001/api", data)
  },
};
