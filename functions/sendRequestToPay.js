 const momo_functions = require('./getTransactionStatus');
 
 
 //SENDING REQUEST TO PAY
  const sendRequestToPay = (UUID, TOKEN, SUBSCRIPTION_KEY) => {
    var request = require("request");

    var options = {
      method: "POST",
      url: "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
      headers: {
        "Content-Type": "application/json",
        "X-Reference-Id": UUID,
        "X-Target-Environment": "sandbox",
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        amount: amount,
        currency: currency,
        externalId: "456123",
        payer: { partyIdType: "MSISDN", partyId: "01245789" },
        payerMessage: "Pay for product",
        payeeNote: "Pay note",
      }),
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.statusCode);
      const requestToPay = response.statusCode;
      if (requestToPay == "202") {
        console.log(
          "request to pay sent successfully ...... "
        );
         momo_functions.getTransactionStatus(UUID, TOKEN, SUBSCRIPTION_KEY);
      }
    });
  };
  module.exports = { sendRequestToPay }