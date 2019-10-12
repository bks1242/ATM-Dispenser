

var currency_notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
var notes = [new Notes (2000), new Notes (500), new Notes (200), new Notes (100),
    new Notes (50), new Notes (20), new Notes (10), new Notes (5), new Notes (2),
    new Notes (1)];

var getMoney = () => {
    let amount = document.getElementById('amount_box').value;
    if (!amount) {
        alert("Enter amount!!!!");
    }
    if (isNaN(amount)) {
        alert("Enter amount in whole number!!!!");
    }
    validateAmount(parseInt(amount, 10));
    console.log("completed", notes);
    document.getElementById("re-2000").innerHTML = notes[0].count;
    countTotalCurrency();
    updateView();
}

var validateAmount = (amount) => {
    if(amount == 0) {
        return;
    }
    let currency = notes.find((value, index, array) => {
        if(amount >= value.amount){
            value.count++;
            return value;
        }
    });
    validateAmount(amount - currency.amount);
}

var updateView = () => {
    notes.forEach((el)=>{
        document.getElementById('re-' + el.amount).innerHTML = el.count + ' ';
        el.count = 0;
    });
}

var countTotalCurrency = () => {
  let sum = notes.reduce((total, value) => {
        return total + value.count;
    }, 0)
    document.getElementById('total_currency').innerHTML = sum + ' ';
alert(sum);
}

