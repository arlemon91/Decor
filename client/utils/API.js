import axios from "axios";

export default {
  getDecors: function () {
    return axios.get("api/decors");
  },
  getDecor: function (id) {
    return axios.get("/api/decors");
  },
  deleteDecor: function (id) {
    return axios.delete("/api/decors" + id);
  },
  saveDecor: function (decorData) {
    return axios.post("/api/decors", decorData);
  },
};
