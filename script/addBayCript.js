window.addEventListener("DOMContentLoaded", () => {
  let parent = document.querySelector(".countru");
  let tabs = document.querySelectorAll(".countru_li");
  let div = document.querySelector(".country_choise");
  let currensy = document.querySelector(".country_span");
  let exchange = document.querySelector("#youPay_input1");
  let val;
  let currentChange;
  let currentCripta;

  function hideClass() {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
  }
  function showClass(i = 0) {
    tabs[i].classList.add("active");

    val = tabs[i].innerText.trim();
    fetchadd(val, currentCripta);

    return val;
  }
  hideClass();
  showClass();
  function writeDiv() {
    tabs.forEach((e) => {
      if (e.classList.contains("active")) {
        div.innerHTML = e.innerHTML;
      }
    });
  }
  parent.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("countru_li")) {
      tabs.forEach((event, i) => {
        if (target == event) {
          hideClass();
          showClass(i);
          writeDiv();
          parent.style.display = "none";
        }
      });
    }
  });
  writeDiv();
  div.addEventListener("click", () => {
    parent.style.display = "block";
  });

  let parentCript = document.querySelector(".cripta");
  let tabsCript = document.querySelectorAll(".cripta_li");
  let divCript = document.querySelector(".cripta_choise");

  function hideClassCript() {
    tabsCript.forEach((e) => {
      e.classList.remove("active");
    });
  }
  function showClassCript(i = 0) {
    tabsCript[i].classList.add("active");

    // console.log(currentCripta);
    currentCripta = tabsCript[i].innerText.trim();
    fetchadd(val, currentCripta);
    return currentCripta;
  }
  hideClassCript();
  showClassCript();
  function writeDivCript() {
    tabsCript.forEach((e) => {
      if (e.classList.contains("active")) {
        divCript.innerHTML = e.innerHTML;
      }
    });
  }
  parentCript.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("cripta_li")) {
      tabsCript.forEach((event, i) => {
        if (target == event) {
          hideClassCript();
          showClassCript(i);
          writeDivCript();
          parentCript.style.display = "none";
        }
      });
    }
  });
  writeDivCript();
  divCript.addEventListener("click", () => {
    parentCript.style.display = "block";
  });

  function fetchadd(x, y) {
    fetch(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,OKB,OKT,LTC,DOT,ADA,SOL,XRP,LUNA,USDT,DOGE,SHIB,UST,MATIC,ATOM,CRO,NEAR,Link,BCH,&tsyms=USD,EUR,BRL,ARS,CLP,PEN,COP,CZK,PLN,HUF,RON,TRY&api_key=f55786242b1b8e1eea9e875db5135df7f7b5c806c2be36bf3a7161337ed2641b"
    )
      .then((response) => response.json())
      .then((product) => {
        currentChange = product.RAW[y][x].PRICE;

        console.log(currentChange);
      });
  }
  // console.log(currentChange);
  let enterData = document.querySelector("#youPay_input");
  enterData.addEventListener("input", () => {
    console.log(enterData.value);
  });

  let deren = fetch(
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,OKB,OKT,LTC,DOT,ADA,SOL,XRP,LUNA,USDT,DOGE,SHIB,UST,MATIC,ATOM,CRO,NEAR,Link,BCH,&tsyms=USD,EUR,BRL,ARS,CLP,PEN,COP,CZK,PLN,HUF,RON,TRY&api_key=f55786242b1b8e1eea9e875db5135df7f7b5c806c2be36bf3a7161337ed2641b"
  )
    .then((response) => response.json())
    .then(function (json) {
      product = json;
    });
  console.log(deren.product);
});
