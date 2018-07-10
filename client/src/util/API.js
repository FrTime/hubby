import axios from "axios";

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";

const weatherApiKey = ",us&appid=bd0d3906d4a9c29f579ad1a5dd40d33c";

// const weatherQuery = "23060";


export default {
  weatherSearch: function (weatherQuery) {
    return axios.get(weatherURL + weatherQuery + weatherApiKey);
  },
  getUser: function () {
    return axios.get("/api/user");
  },
  // Gets the article with the given id
  getUserDataById: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the article with the given id
  deleteUserData: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a article to the database
  saveUserData: function (userData) {
    return axios.post("/api/user", userData);
  },
  updateUserData: function (userData) {
    return axios.put("/api/user", userData);
  },

};
