import axios from "axios";

export default {
  getAll: function (category) {
    return axios.get("/api/" + category);
  },

  getOne: function (category, id) {
    return axios.get("/api/" + id);
  },
  deleteOne: function (id) {
    return axios.delete("/api/" + id);
  },
  saveOne: function (data) {
    // console.log("API.js saveOne data: ", data);
    return axios.post("/api/newpost", data)
    .then((response) => {
      console.log('response: ', response);
    }, (error) => {
      console.log('error: ', error);
    });
  },
};
