const { makeRequest } = require('./momoModule');

makeRequest({
  callbackHost: "<callbackHost>",
  userApiKey: "<userApiKey>",
  userId: "<userId>",
  primaryKey: "<primaryKey>",
  amount: "<amount>",
  currency: "<currency>",
  externalId: "<externalId>",
  partyIdType: "<partyIdType..eg..MSISDN>",
  partyId: "<partyId>",
  payerMessage: "<payerMessage>",
  payeeNote: "<payeeNote>"
})
  .then(({ response, status }) => {
    console.log("Response:", response);
    console.log("Transaction Status:", status);
  })
  .catch(error => {
    console.error("Error:", error);
  });
