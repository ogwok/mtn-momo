const { makeRequest } = require('./momoModule');

makeRequest({
  callbackHost: "https://webhook.site/318e088e-2f48-4ad4-8974-7615436d637a",
  userApiKey: "f2d9072450404339b7ddc94b1d2692dd",
  userId: "de4351ce-0bec-4073-ab06-f3b0d9ee4fb8",
  primaryKey: "475706d56e944363b92d24829a13bb9c",
  amount: "150",
  currency: "EUR",
  externalId: "txt_011",
  partyIdType: "MSISDN",
  partyId: "256784771634",
  payerMessage: "testing",
  payeeNote: "testing"
})
  .then(({ response, status }) => {
    console.log("Response:", response);
    console.log("Transaction Status:", status);
  })
  .catch(error => {
    console.error("Error:", error);
  });
