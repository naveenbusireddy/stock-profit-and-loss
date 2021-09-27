const initialPrice = document.querySelector("#initial-price");
const qtyStock = document.querySelector("#qty-stock");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-button");
const showMessage = document.querySelector("#output");

function calculateProfitAndLoss() {
    const initial = Number(initialPrice.value);
    const qty = Number(qtyStock.value);
    const curprice = Number(currentPrice.value);

    if (initial&&qty&&curprice) {
        if(curprice > initial)
    {
        const profit = curprice-initial;
        const totalprofit = profit*qty;
        const profitPercentage = (profit/initial)*100;        
        displayMessage('The total profit is:' +totalprofit+ " and profit percentage is: " +profitPercentage.toFixed(2)+'%'); //numdigit.toFixed(2)

    } else if(initial > curprice) {
            const loss = initial-curprice;
            const totalloss = loss*qty;
            const lossPercentage = ((loss/initial)*100);
            displayMessage('The total loss is:' +totalloss+ ' and loss percentage is:' +lossPercentage.toFixed(2)+'%');
    
        } else {
            displayMessage('No pain no gain, no gain no pain');
        }        
    }
    else {
        displayMessage('Please enter the three values');
    }

    
}

submitButton.addEventListener("click", calculateProfitAndLoss);

function displayMessage(msg) {
    showMessage.innerHTML = msg;
}
