
# MTN Momo Collections 


A simple library to the MTN Momo Collections API


 - Installation •
 - Usage •
 - API Reference •
 - Contributing •
 - License •


## Installation

Use the package manager [npm](https://www.npmjs.com/package/mtn-momo) to install momo-api.

```bash
`npm i mtn-momo-api --save`
```

## Usage
Here's an example of how you can use the Momo API integration library in your project:

```bash

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

```

Replace **`"YOUR_USER_SECRET"`**, **`"YOUR_USER_ID"`**, and **`"YOUR_PRIMARY_KEY"`** with your own Momo API credentials.

## API Reference
### Controller
The **`Controller`** class provides methods to interact with the Momo API.

Constructor

```bash
`
const app = new Controller(options);
`
```

- **`options`**: An object containing the following properties:
  - **`callbackHost`**: The callback URL for receiving payment notifications.
  - **`userSecret`**: Your Momo user secret.
  - **`userId`**: Your Momo user ID.
  - **`primaryKey`**: Your Momo primary key.
**`requestToPay(amount, currency, externalId, partyIdType, partyId, payerMessage, payeeNote)
Initiates a request to pay.`**

```bash
`
const response = await app.requestToPay(
  amount,
  currency,
  externalId,
  partyIdType,
  partyId,
  payerMessage,
  payeeNote
);

```

- **`amount`**: The amount to be paid.
- **`currency`**: The currency of the payment.
- **`externalId`**: An ID generated by your system to uniquely identify the transaction.
- **`partyIdType`**: The type of the party ID (e.g., MSISDN, EMAIL, etc.).
- **`partyId`**: The party ID of the payer.
- **`payerMessage`**: A message that will be displayed to the payer.
- **`payeeNote`**: A note that will be displayed to the payee.
Returns a promise that resolves to an object with the following properties:

- **`responseCode`**: The response code from the API.
- **`referenceId`**: The reference ID generated for the transaction.
**`getTransactionStatus(referenceId)`**

Retrieves the status of a transaction.

```bash
const status = await app.getTransactionStatus(referenceId);
```

**`referenceId`**: The reference ID of the transaction.
Returns a promise that resolves to the transaction status object.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the **MIT License.**