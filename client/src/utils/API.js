import axios from "axios";

export default {
  getAll: function (category) {
    return axios.get("http://localhost:3001/api/" + category )
    // .then(function (response) {
    //   // handle success
    //   console.log('getAll response: ', response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
  },

  getOne: function (category, id) {
    return axios.get("http://localhost:3001/api/" + id);
  },
  deleteOne: function (id) {
    return axios.delete("http://localhost:3001/api/" + id);
  },
  saveOne: function (data) {
    // console.log('API.js saveOne data: ', data)
    return axios.post("http://localhost:3001/api", data)
  },
};
