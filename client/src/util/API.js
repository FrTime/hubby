import axios from "axios";


const weatherURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";

const weatherApiKey = ",us&appid=bd0d3906d4a9c29f579ad1a5dd40d33c";
const twitterURL = "https://api.twitter.com/1.1/search/tweets.json?q=from%3ANasa%20OR%20%23nasa"
const trafficURL = "https://dev.virtualearth.net/REST/v1/Traffic/Incidents/37,-78,38,-77?key="
 const bingKey = "ApH-LGyfSYzyG5DH518VNtm0IiIfsE3U99NuH-jHZFFtLosxIuL06kAv9Rowm0mX"
// const weatherQuery = "23060";

export default {
  weatherSearch: function(weatherQuery) {
    return axios.get(weatherURL + weatherQuery + weatherApiKey);
  },
  trafficSearch: function(trafficQuery) {
    return axios.get(trafficURL + bingKey);
  },

  twitterSearch: function (twitterQuery) {  
    return axios.get(twitterURL);  
  },  
  getUser: function () {
    return axios.get("/api/user");
  },
  // Gets the article with the given id
  getUserDataById: function(id) {
    return axios.get("/api/user/" + id);
  },
  getUserDataByEmail: function(email) {
    return axios.get("/api/user/email/" + email);
  },
  // Deletes the article with the given id
  deleteUserData: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a article to the database
  saveUserData: function(userData) {
    return axios.post("/api/user", userData);
  },
  updateUserData: function(id, userData) {
    console.log("in update api and id: " + id)
    console.log(userData)
    return axios({
      method: 'put',
      url: "/api/user/" + id,
      data: userData
    });

  }

};
