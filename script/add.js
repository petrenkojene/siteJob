window.addEventListener("DOMContentLoaded", () => {
  setInterval(setApi);
  function setApi() {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,OKB,OKT,LTC,DOT,ADA&tsyms=USD,EUR,BRL,ARS,CLP,PEN,COP,CZK,PLN,HUF,RON,TRY&api_key=f55786242b1b8e1eea9e875db5135df7f7b5c806c2be36bf3a7161337ed2641b"
    )
      .then((response) => response.json())
      .then(function (json) {
        product = json;
        // console.log(product);
        // PRICE
        document.querySelector(".BTC_price").innerHTML =
          product.DISPLAY.BTC.USD.PRICE;
        document.querySelector(".ETH_price").innerHTML =
          product.DISPLAY.ETH.USD.PRICE;
        document.querySelector(".OKB_price").innerHTML =
          product.DISPLAY.OKB.USD.PRICE;
        document.querySelector(".OKT_price").innerHTML =
          product.DISPLAY.OKT.USD.PRICE;
        document.querySelector(".LTC_price").innerHTML =
          product.DISPLAY.LTC.USD.PRICE;
        document.querySelector(".DOT_price").innerHTML =
          product.DISPLAY.DOT.USD.PRICE;
        document.querySelector(".ADA_price").innerHTML =
          product.DISPLAY.ADA.USD.PRICE;

        // CHANGE

        function change(selector, item) {
          if (item < 0) {
            document.querySelector(selector).style.color = "red";
          } else {
            document.querySelector(selector).style.color = "green";
          }
          document.querySelector(selector).style.fontWeight = 700;
          document.querySelector(selector).innerHTML = `
          ${item}%`;
        }
        change(".BTC_price_change", +product.DISPLAY.BTC.USD.CHANGEPCTDAY);
        change(".ETH_price_change", +product.DISPLAY.ETH.USD.CHANGEPCTDAY);
        change(".OKB_price_change", +product.DISPLAY.OKB.USD.CHANGEPCTDAY);
        change(".OKT_price_change", +product.DISPLAY.OKT.USD.CHANGEPCTDAY);
        change(".LTC_price_change", +product.DISPLAY.LTC.USD.CHANGEPCTDAY);
        change(".DOT_price_change", +product.DISPLAY.DOT.USD.CHANGEPCTDAY);
        change(".ADA_price_change", +product.DISPLAY.ADA.USD.CHANGEPCTDAY);

        // DIAGRAM

        function diagram(selector, src) {
          document.querySelector(selector).style.src = src;
          document.querySelector(selector).style.width = 100 + "px";
        }
        diagram(
          ".diagram_BTC",
          "https://images.cryptocompare.com/sparkchart/BTC/USD/latest.png?ts=1643103600"
        );
        diagram(
          ".diagram_ETH",
          "https://images.cryptocompare.com/sparkchart/ETH/USD/latest.png?ts=1643103600"
        );
        diagram(
          ".diagram_OKB",
          "	https://images.cryptocompare.com/sparkchart/OKB/USD/latest.png?ts=1643104800"
        );
        diagram(
          ".diagram_OKT",
          "https://images.cryptocompare.com/sparkchart/ETH/USD/latest.png?ts=1643103600"
        );
        diagram(
          ".diagram_LTC",
          "https://images.cryptocompare.com/sparkchart/LTC/USD/latest.png?ts=1643106000"
        );
        diagram(
          ".diagram_DOT",
          "https://images.cryptocompare.com/sparkchart/DOT/USD/latest.png?ts=1643106000"
        );
        diagram(
          ".diagram_ADA",
          "https://images.cryptocompare.com/sparkchart/ADA/USD/latest.png?ts=1643106000"
        );

        // CAPITALIZATION
      });
  }
  // setApi();

  // byCript scroll
});
