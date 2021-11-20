 const momo_functions = require('./confirmApiUser');
 
 //CREATING API USER
 const createApiUser = (UUID, SUBSCRIPTION_KEY, AMOUNT) => {
    var request = require("request");
    var options = {
      method: "POST",
      url: "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser",
      headers: {
        "X-Reference-Id": UUID,
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
      },
      body: JSON.stringify({
        providerCallbackHost: host,
      }),
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const created = response.statusCode;
      console.log(created);
      if (created == "201") {
        console.log("user created successfully... starting confirming user");
        momo_functions.confirmUser(UUID, SUBSCRIPTION_KEY);
      }
    });
  };
  module.exports = { createApiUser }