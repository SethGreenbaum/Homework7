const axios = require("axios");

const api = {
  getUser(user) {
    var usernameUrl = `https://api.github.com/users/${user}`
    axios.get(usernameUrl).then(function(response){
      return response.data;

    }
    )
  }
};

api.getUser("SethGreenbaum");

module.exports = api;
