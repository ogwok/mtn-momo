# mtn-momo-api

mtn-momo-api is a Vanilla Javascript pakage for accepting, sending and manipulating payments using mtn momo.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
`npm i mtn-momo-api --save`
```

## Usage

```javascript
const mtn_momo = require('./mtn-momo-api');

# momo requires the use of UUIDv4 - this is just an example
const USER_ID = "a94a436-40bf-465d-bac9-88ba419s8d";

# use either your primary or secondary key,
# make sure you have subscribed to the collections api
const SUBSCRIPTION_KEY = "475706d56e944363b92d24829a13bb9c";

# amount you want the user to pay
const AMOUNT = 256;

# currency the user will pay in
const CURRENCY = "EUR";

# callback host of your chossing
const CALLBACK_HOST = "https://webhook.site/4e9b510f-d67d-41fd-af25";

# make api call - will return the status of the transactions and details
mtn_momo.requestUserToPay(USER_ID, SUBSCRIPTION_KEY, AMOUNT, CURRENCY, CALLBACK_HOST);


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Important
This is early Beta, not to be used in productions. Solid updates turning up every day.
Disbursements coming soon.
Inquiries go to my mail - williamogwok10@gmail.com 


## License
[MIT](https://choosealicense.com/licenses/mit/)