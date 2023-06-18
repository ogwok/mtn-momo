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

    const status = await app.getTransactionStatus(response.referenceId);

    return { response, status };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

module.exports = { makeRequest };
