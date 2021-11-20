  const momo_functions = require('./sendRequestToPay');
  
  //GENERATE USER TOKEN
  const generateUserToken = (UUID, SECRET, SUBSCRIPTION_KEY) => {
    var btoa = require("btoa");
    var clientId = UUID;
    var clientSecret = SECRET;

    // encoding to base64
    var authorizationBasic = btoa(clientId + ":" + clientSecret);

    var request = require("request");
    var options = {
      method: "POST",
      url: "https://sandbox.momodeveloper.mtn.com/collection/token/",
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
        Authorization: "Basic " + authorizationBasic,
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.statusCode);
      console.log("user token generated successfully ...");
      const token = JSON.parse(response.body).access_token;
      if (token) {
        console.log("sending request to pay");
        momo_functions.sendRequestToPay(UUID, token, SUBSCRIPTION_KEY);
      }
    });
  };

  module.exports = { generateUserToken }