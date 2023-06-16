const request = require("request");
const { v4: uuidv4 } = require('uuid');

class Controller {
  constructor({ callbackHost, userSecret, userId, primaryKey }) {
    this.callbackHost = callbackHost;
    this.userSecret = userSecret;
    this.userId = userId;
    this.primaryKey = primaryKey;
  }

  async generateUUID() {
    return new Promise((resolve, reject) => {
      try {
        const uuid = uuidv4();
        resolve(uuid);
      } catch (error) {
        reject(error);
      }
    });
  }

  async requestToPay(amount, currency, externalId, partyIdType, partyId, payerMessage, payeeNote) {
    const token = await this.getToken();
    const referenceId = await this.generateUUID();
    return new Promise((resolve, reject) => {
      const options = {
        method: "POST",
        url: "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
        headers: {
          "Content-Type": "application/json",
          "X-Reference-Id": referenceId,
          "X-Target-Environment": "sandbox",
          "Ocp-Apim-Subscription-Key": this.primaryKey,
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          amount: amount,
          currency: currency,
          externalId: externalId,
          payer: { partyIdType: partyIdType, partyId: partyId },
          payerMessage: payerMessage,
          payeeNote: payeeNote,
        }),
      };

      request(options, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const requestToPay = response.statusCode;
          if (requestToPay == "202") {
          }
          resolve({ responseCode: requestToPay, referenceId: referenceId });
        }
      });
    });
  }

  getToken() {
    return new Promise((resolve, reject) => {
      const authorizationBasic = Buffer.from(this.userId + ":" + this.userSecret).toString('base64');

      const options = {
        method: "POST",
        url: "https://sandbox.momodeveloper.mtn.com/collection/token/",
        headers: {
          "Ocp-Apim-Subscription-Key": this.primaryKey,
          Authorization: "Basic " + authorizationBasic,
        },
      };

      request(options, (error, response) => {
        if (error) {
          reject(error);
        } else {
          const token = JSON.parse(response.body).access_token;
          if (token) {
            resolve(token);
          }
        }
      });
    });
  }

  async getTransactionStatus(referenceId) {
    const token = await this.getToken();
    return new Promise((resolve, reject) => {
      var options = {
        method: "GET",
        url: `https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${referenceId}`,
        headers: {
          "X-Target-Environment": "sandbox",
          "Ocp-Apim-Subscription-Key": this.primaryKey,
          Authorization: "Bearer " + token,
        },
      };
      request(options, function (error, response) {
        if (error) {
          reject(error);
        } else {
          const transactionStatus = JSON.parse(response.body);
          console.log(transactionStatus);
          resolve(transactionStatus);
        }
      });
    });
  }
}

module.exports = { Controller };
