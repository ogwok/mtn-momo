const requestUserToPay = (
  USER_ID,
  SUBSCRIPTION_KEY,
  AMOUNT,
  CURRENCY,
  HOST
) => {
  let amount = AMOUNT;
  let currency = CURRENCY;
  let host = HOST;
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
    });
  };

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
          "request to pay sent successfully .. attempting to get transaction status..."
        );
        getTransactionStatus(UUID, TOKEN, SUBSCRIPTION_KEY);
      }
    });
  };

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
        sendRequestToPay(UUID, token, SUBSCRIPTION_KEY);
      }
    });
  };

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
        generateUserToken(UUID, userApiKey, SUBSCRIPTION_KEY);
      }
    });
  };
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
        createUserApiKey(UUID, SUBSCRIPTION_KEY);
      }
    });
  };

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
        confirmUser(UUID, SUBSCRIPTION_KEY);
      }
    });
  };

  // const USER_ID = USER_ID;
  // const SUBSCRIPTION_KEY = SUBSCRTIPION_KEY;
  createApiUser(USER_ID, SUBSCRIPTION_KEY);
};
module.exports = {requestUserToPay}

