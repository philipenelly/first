var money = document.getElementById("money");
var amountto = document.querySelector("#amountto")
var amount = document.querySelector("#amount")
var amountin = document.querySelector("#amountin")
if (amountto == amountin) {
    alert("the current are the same")
}

function check() {
    if (amountin.value == amountto.value) {
        amount.innerHTML = "the currency provided<br> are equal"
        amount.style.color = "red"
    } else if (amountin.value == "RWANDAN-RWF") {
        amount.style.color = "black"
        if (amountto.value == "USD-$") {
            amount.innerHTML = money.value / 1000 + `$`
        } else if (amountto.value == "Euro-£") {
            amount.innerHTML = money.value / 1230 + `£`
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value / 1300 + `Pounds`
        }
    } else if (amountin.value == "USD-$") {
        amount.style.color = "black"
        if (amountto.value == "RWANDAN-RWF") {
            amount.innerHTML = money.value * 1000 + `RWF`
        } else if (amountto.value == "Euro-£") {
            amount.innerHTML = money.value * 1.5 + `£`
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value * 1.2 + `Pounds`
        }
    } else if (amountin.value == "Euro-£") {
        amount.style.color = "black"
        if (amountto.value == "RWANDAN-RWF") {
            amount.innerHTML = money.value * 1230 + `RWF`
        } else if (amountto.value == "USD-$") {
            amount.innerHTML = money.value / 1.5 + `$`
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value * 4 + `pounds`
        }
    } else if (amountin.value == "pound") {
        amount.style.color = "black"
        if (amountto.value == "EURO-£") {
            amount.innerHTML = money.value / 4 + `£`
        } else if (amountto.value == "USD-$") {
            amount.innerHTML = money.value * 1.2 + `$`
        } else if (amountto.value == "RWANDAN-RWF") {
            amount.innerHTML = money.value * 1300 + `RWF`

        }
    }

    return false;
}