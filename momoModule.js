const { Controller } = require('./momo');

// Create an async function to use await
async function makeRequest({
  callbackHost,
  userSecret,
  userId,
  primaryKey,
  amount,
  currency,
  externalId,
  partyIdType,
  partyId,
  payerMessage,
  payeeNote
}) {
  const app = new Controller({
    callbackHost,
    userSecret,
    userId,
    primaryKey
  });

  try {
    const response = await app.requestToPay(
      amount,
      currency,
      externalId,
      partyIdType,
      partyId,
      payerMessage,
      payeeNote
    );

    console.log("Response:", response);

    const status = await app.getTransactionStatus(response.referenceId);
  
    console.log("Transaction Status:", status);
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = { makeRequest };
