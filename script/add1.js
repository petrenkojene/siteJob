window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".another_click").addEventListener("click", () => {
    document.querySelector(".another_click").classList.toggle("active");
    if (document.querySelector(".another_click").classList.contains("active")) {
      document.querySelector(".another_click").innerHTML = "Подробнее";
      document.querySelector(".anotherCript_par").innerHTML = `
            <p>Просматривайте актуальные цены сотен криптовалют, доступных на OKEx, вместе с изменениями этих цен за сутки и другой статистикой вроде рыночной капитализации."</p>`;
      document.querySelector(".anotherCript_burger").style.flexDirection =
        "row";
    } else {
      document.querySelector(".another_click").innerHTML = "Скрыть";
      document.querySelector(
        ".anotherCript_par"
      ).innerHTML = `<p>Просматривайте актуальные цены сотен криптовалют, доступных на OKEx, вместе с изменениями этих цен за сутки и другой статистикой вроде рыночной капитализации. Вы также можете нажать кнопку "Торговля" для любой криптовалюты из списка, чтобы перейти на соответствующий рынок OKEx для покупки и продажи каждого актива.</p>
            <p> По умолчанию криптовалюты на этой странице отсортированы по убыванию рыночной капитализации. Список можно отсортировать и по изменению цены за 24 часа. Так вы сможете посмотреть, какие активы выросли больше других за сутки, а какие упали.</p>`;
      document.querySelector(".anotherCript_burger").style.flexDirection =
        "column";
    }
  });
  // scroll
  //   let table = document.querySelector(".another_table");
  //   document.addEventListener("scroll", () => {
  //     console.log(table.getBoundingClientRect().top);
  //     if (window.pageYOffset > 150) {
  //       table.style.position = "fixed";
  //       table.style.display = "flex";
  //       table.style.width = 1016 + "px";
  //       table.style.justifyContent = "space-around";
  //       table.style.flexShrink = 0;

  //       table.style.marginTop = 10 + "px";
  //     } else {
  //       table.style.position = "relative";
  //     }
  //   });
  setInterval(setApi);
  function setApi() {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,OKB,OKT,LTC,DOT,ADA,SOL,XRP,LUNA,USDT,DOGE,SHIB,UST,MATIC,ATOM,CRO,NEAR,Link,BCH,&tsyms=USD,EUR,BRL,ARS,CLP,PEN,COP,CZK,PLN,HUF,RON,TRY&api_key=f55786242b1b8e1eea9e875db5135df7f7b5c806c2be36bf3a7161337ed2641b"
    )
      .then((response) => response.json())
      .then(function (json) {
        product = json;
        // console.log(product);
        // PRICE
        capitalization(".BTC_price", product.DISPLAY.BTC.USD.PRICE);
        capitalization(".ETH_price", product.DISPLAY.ETH.USD.PRICE);
        capitalization(".OKB_price", product.DISPLAY.OKB.USD.PRICE);
        capitalization(".OKT_price", product.DISPLAY.OKT.USD.PRICE);
        capitalization(".LTC_price", product.DISPLAY.LTC.USD.PRICE);
        capitalization(".DOT_price", product.DISPLAY.DOT.USD.PRICE);
        capitalization(".ADA_price", product.DISPLAY.ADA.USD.PRICE);
        capitalization(".SOL_price", product.DISPLAY.SOL.USD.PRICE);
        capitalization(".XRP_price", product.DISPLAY.XRP.USD.PRICE);
        capitalization(".LUNA_price", product.DISPLAY.LUNA.USD.PRICE);
        capitalization(".USDT_price", product.DISPLAY.USDT.USD.PRICE);
        capitalization(".DOGE_price", product.DISPLAY.DOGE.USD.PRICE);
        capitalization(".SHIB_price", product.DISPLAY.SHIB.USD.PRICE);
        capitalization(".UST_price", product.DISPLAY.UST.USD.PRICE);
        capitalization(".MATIC_price", product.DISPLAY.MATIC.USD.PRICE);
        capitalization(".ATOM_price", product.DISPLAY.ATOM.USD.PRICE);
        capitalization(".CRO_price", product.DISPLAY.CRO.USD.PRICE);
        capitalization(".NEAR_price", product.DISPLAY.NEAR.USD.PRICE);
        capitalization(".LINK_price", product.DISPLAY.LINK.USD.PRICE);
        capitalization(".BCH_price", product.DISPLAY.BCH.USD.PRICE);

        // CHANGE

        function change(selector, item) {
          if (item < 0) {
            document.querySelector(selector).style.color = "#E35E5E";
            document.querySelector(selector).innerHTML = `
          ${item}%`;
          } else {
            document.querySelector(selector).style.color = "#008000";
            document.querySelector(selector).innerHTML = `+
          ${item}%`;
          }
        }
        change(".BTC_price_change", +product.DISPLAY.BTC.USD.CHANGEPCTDAY);
        change(".ETH_price_change", +product.DISPLAY.ETH.USD.CHANGEPCTDAY);
        change(".OKB_price_change", +product.DISPLAY.OKB.USD.CHANGEPCTDAY);
        change(".OKT_price_change", +product.DISPLAY.OKT.USD.CHANGEPCTDAY);
        change(".LTC_price_change", +product.DISPLAY.LTC.USD.CHANGEPCTDAY);
        change(".DOT_price_change", +product.DISPLAY.DOT.USD.CHANGEPCTDAY);
        change(".ADA_price_change", +product.DISPLAY.ADA.USD.CHANGEPCTDAY);
        change(".SOL_price_change", +product.DISPLAY.SOL.USD.CHANGEPCTDAY);
        change(".XRP_price_change", +product.DISPLAY.XRP.USD.CHANGEPCTDAY);
        change(".LUNA_price_change", +product.DISPLAY.LUNA.USD.CHANGEPCTDAY);
        change(".USDT_price_change", +product.DISPLAY.USDT.USD.CHANGEPCTDAY);
        change(".DOGE_price_change", +product.DISPLAY.DOGE.USD.CHANGEPCTDAY);
        change(".SHIB_price_change", +product.DISPLAY.SHIB.USD.CHANGEPCTDAY);
        change(".UST_price_change", +product.DISPLAY.UST.USD.CHANGEPCTDAY);
        change(".MATIC_price_change", +product.DISPLAY.MATIC.USD.CHANGEPCTDAY);
        change(".ATOM_price_change", +product.DISPLAY.ATOM.USD.CHANGEPCTDAY);
        change(".CRO_price_change", +product.DISPLAY.CRO.USD.CHANGEPCTDAY);
        change(".NEAR_price_change", +product.DISPLAY.NEAR.USD.CHANGEPCTDAY);
        change(".LINK_price_change", +product.DISPLAY.LINK.USD.CHANGEPCTDAY);
        change(".BCH_price_change", +product.DISPLAY.BCH.USD.CHANGEPCTDAY);

        // DIAGRAM

        // CAPITALIZATION

        function capitalization(selector, item) {
          document.querySelector(selector).innerHTML = item;
          document.querySelector(selector).style.fontWeight = 700;
        }
        capitalization(".capitaliz_BTC", product.DISPLAY.BTC.USD.MKTCAP);
        capitalization(".capitaliz_ETH", product.DISPLAY.ETH.USD.MKTCAP);
        capitalization(".capitaliz_OKB", product.DISPLAY.OKB.USD.MKTCAP);
        capitalization(".capitaliz_OKT", product.DISPLAY.OKT.USD.MKTCAP);
        capitalization(".capitaliz_LTC", product.DISPLAY.LTC.USD.MKTCAP);
        capitalization(".capitaliz_DOT", product.DISPLAY.DOT.USD.MKTCAP);
        capitalization(".capitaliz_ADA", product.DISPLAY.ADA.USD.MKTCAP);
        capitalization(".capitaliz_SOL", product.DISPLAY.SOL.USD.MKTCAP);
        capitalization(".capitaliz_XRP", product.DISPLAY.XRP.USD.MKTCAP);
        capitalization(".capitaliz_LUNA", product.DISPLAY.LUNA.USD.MKTCAP);
        capitalization(".capitaliz_USDT", product.DISPLAY.USDT.USD.MKTCAP);
        capitalization(".capitaliz_DOGE", product.DISPLAY.DOGE.USD.MKTCAP);
        capitalization(".capitaliz_SHIB", product.DISPLAY.SHIB.USD.MKTCAP);
        capitalization(".capitaliz_UST", product.DISPLAY.UST.USD.MKTCAP);
        capitalization(".capitaliz_MATIC", product.DISPLAY.MATIC.USD.MKTCAP);
        capitalization(".capitaliz_ATOM", product.DISPLAY.ATOM.USD.MKTCAP);
        capitalization(".capitaliz_CRO", product.DISPLAY.CRO.USD.MKTCAP);
        capitalization(".capitaliz_NEAR", product.DISPLAY.NEAR.USD.MKTCAP);
        capitalization(".capitaliz_LINK", product.DISPLAY.LINK.USD.MKTCAP);
        capitalization(".capitaliz_BCH", product.DISPLAY.BCH.USD.MKTCAP);
      });
  }
  // setApi();
});
