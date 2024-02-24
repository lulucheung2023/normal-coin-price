const axios = require('axios');
const btcToday = require('founction-btc-today');

// Get current btc price
btcToday("https://api.coindesk.com/v1/bpi/currentprice/BTC.json").then((price) => {
  console.log("The current BTC price is", price.rate_float);
});

// Get current ETH price
axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD")
  .then(response => {
    console.log("The current ETH price is", response.data.USD);
  })
  .catch(error => {
    console.log("There was an error getting the ETH price:", error);
  });