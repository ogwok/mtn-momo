const { makeRequest } = require('./momoModule');

makeRequest({
  callbackHost: "https://webhook.site/318e088e-2f48-4ad4-8974-7615436d637a",
  userSecret: "b5bfa32c0c7f4bb983405e3c241696af",
  userId: "bfb4faeb-161c-4a7f-a478-11e6fb2dd1dc",
  primaryKey: "475706d56e944363b92d24829a13bb9c",
  amount: "150",
  currency: "EUR",
  externalId: "txt_011",
  partyIdType: "MSISDN",
  partyId: "256784771634",
  payerMessage: "testing",
  payeeNote: "testing"
});
