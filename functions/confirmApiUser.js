const momo_functions = require('./createUserApiKey');

//CONFIRMING THE CREATION OR EXISTANCE OF A USER
const confirmUser = (UUID, SUBSCRIPTION_KEY) => {
    var request = require("request");
    var options = {
      method: "GET",
      url: `https://sandbox.momodeveloper.mtn.com/v1_0/apiuser/${UUID}`,
      headers: {
        "X-Reference-Id": UUID,
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const userConfirmed = response.statusCode;
      console.log(userConfirmed);
      console.log("user confirmed ... starting creating api key");
      if (userConfirmed == "200") {
        momo_functions.createUserApiKey(UUID, SUBSCRIPTION_KEY);
      }
    });
  };
  module.exports = { confirmUser }