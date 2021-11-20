const momo_functions = require('./functions/createApiUser');

const requestUserToPay = (
  USER_ID,
  SUBSCRIPTION_KEY,
  AMOUNT,
  CURRENCY,
  HOST
) => {
  global.amount = AMOUNT;
  global.currency = CURRENCY;
  global.host = HOST;
  
  
  // const USER_ID = USER_ID;
  // const SUBSCRIPTION_KEY = SUBSCRTIPION_KEY;
  momo_functions.createApiUser(USER_ID, SUBSCRIPTION_KEY);
};
module.exports = {requestUserToPay}

