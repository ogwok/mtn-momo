const { Controller } = require('./momo');

// Create an async function to use await
async function makeRequest() {
  const app = new Controller(
    "https://webhook.site/318e088e-2f48-4ad4-8974-7615436d637a",
    "b5bfa32c0c7f4bb983405e3c241696af",
    "bfb4faeb-161c-4a7f-a478-11e6fb2dd1dc",
    "475706d56e944363b92d24829a13bb9c"
  );

  try {
    const response = await app.requestToPay(
      "150",
      "EUR",
      "txt_011",
      "MSISDN",
      "256784771634",
      "testing",
      "testing"
    );

    console.log("Response:", response);

    const status = await app.getTransactionStatus("fc92cbe4-a9ba-4814-aaf3-abb470952de2");
  
      console.log("Transaction Status:", status);
      

  } catch (error) {
    console.error("Error:", error);
  }
}

makeRequest();
