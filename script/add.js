setInterval(setApi);
function setApi() {
  fetch(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,OKB,OKT,LTC,DOT,ADA,&tsyms=USD,&api_key=f55786242b1b8e1eea9e875db5135df7f7b5c806c2be36bf3a7161337ed2641b"
  )
    .then((response) => response.json())
    .then(function (json) {
      product = json;

      document.querySelector(".BTC_price").innerHTML = `$${product.BTC.USD}`;
      document.querySelector(".ETH_price").innerHTML = `$${product.ETH.USD}`;
      document.querySelector(".OKB_price").innerHTML = `$${product.OKB.USD}`;
      document.querySelector(".OKT_price").innerHTML = `$${product.OKT.USD}`;
      document.querySelector(".LTC_price").innerHTML = `$${product.LTC.USD}`;
      document.querySelector(".DOT_price").innerHTML = `$${product.DOT.USD}`;
      document.querySelector(".ADA_price").innerHTML = `$${product.ADA.USD}`;
    });
}
