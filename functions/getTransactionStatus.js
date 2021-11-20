//GETTING TRANSACTION STATUS
const getTransactionStatus = (UUID, TOKEN, SUBSCRIPTION_KEY) => {
    var request = require("request");
    var options = {
      method: "GET",
      url: `https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${UUID}`,
      headers: {
        "X-Target-Environment": "sandbox",
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
        Authorization: "Bearer " + TOKEN,
      },
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      const transactionStatus = JSON.parse(response.body);
      console.log(transactionStatus);
      return transactionStatus;
    });
  };

  module.exports = { getTransactionStatus }