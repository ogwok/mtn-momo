 const momo_functions = require('./generateUserToken');

 //CREATING API KEY FOR THE USER
 const createUserApiKey = (UUID, SUBSCRIPTION_KEY) => {
    var request = require("request");
    var options = {
      method: "POST",
      url: `https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/${UUID}/apikey`,
      headers: {
        "X-Reference-Id": UUID,
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.statusCode);
      const userApiKey = JSON.parse(response.body).apiKey;
      console.log("api key created successfully ... ");
      if (userApiKey) {
        console.log("starting... generating user token");
        momo_functions.generateUserToken(UUID, userApiKey, SUBSCRIPTION_KEY);
      }
    });
  };
  module.exports = { createUserApiKey }