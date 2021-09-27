const initialPrice = document.querySelector("#initial-price");
const qtyStock = document.querySelector("#qty-stock");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-button");
const showMessage = document.querySelector("#output");

function calculateProfitAndLoss(){
    const initial = initialPrice.value;
    const qty = qtyStock.value;
    const curprice = currentPrice.value;

    if(curprice > initial)
    {
        const profitpershare = curprice-initial;
        const totalprofit = profitpershare*qty;
        const profitPercentage = (profitpershare/initial)*100;
        console.log(totalprofit);
        console.log(profitPercentage);
    } else if(initial > curprice) {
        const losspershare = initial-curprice;
        const totalloss = losspershare*qty;
        const lossPercentage = (losspershare/initial)*100;
        console.log(totalloss);
        console.log(lossPercentage);
    } else {
        console.log("no pain no gain");
    }
}

submitButton.addEventListener("click", calculateProfitAndLoss);
