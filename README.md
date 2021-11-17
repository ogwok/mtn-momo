# What is this?

Easily setup mtn momo api for your javascript projects

# Installation

`npm i mtn-momo-api --save`

Then...

...
const mtn_momo = require("./mtn-momo-api");

const USER_ID = "";
const SUBSCRIPTION_KEY = "";
const AMOUNT = 256;
const CURRENCY = "EUR";
const CALLBACK_HOST = "www.yourcallbackhost.com";

mtn_momo.requestUserToPay(USER_ID, SUBSCRIPTION_KEY, AMOUNT, CURRENCY, CALLBACK_HOST);
... 

## Options

1. USER_ID: generate a UUIDv4 from their website.
2. SUBSCRIPTION_KEY: use either the primary or secondary subscription key from the momo developers website.
3. AMOUNT: enter the amount you would like to ask the user to pay.
4. CURRENCY: choose the currency you like to accept money in.
5. CALLBACK_HOST: also specify your callback host here.

NOTE: THIS IS BETA - IMPROVEMENTS WILL BE COMMING REAL QUICK IN THE COMING WEEKS. 
