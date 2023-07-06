var money = document.getElementById("money");
var amountto = document.querySelector("#amountto")
var amount = document.querySelector("#amount")
var amountin = document.querySelector("#amountin")

function check() {
    if (amountin.value == amountto.value) {
        amount.innerHTML = "pleas inter different countries"
        amount.style.color = "red"
        if(money.value == 0)
            money.innerHTML="pleas enter something"
            money.style.color="red"
        }
    } else if (amountin.value == "RWANDAN-RWF") {
        amount.style.color = "green"
        if (amountto.value == "USD-$") {
            amount.innerHTML = money.value / 1000 + `$`
        } else if (amountto.value == "Euro-£") {
            amount.innerHTML = money.value / 1230 + `£`
            amount.style.color = "green"
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value / 1300 + `Pounds`
            amount.style.color = "green"
        }
    } else if (amountin.value == "USD-$") {
        amount.style.color = "green"
        if (amountto.value == "RWANDAN-RWF") {
            amount.innerHTML = money.value * 1000 + `RWF`
        } else if (amountto.value == "Euro-£") {
            amount.innerHTML = money.value * 1.5 + `£`
            amount.style.color = "green"
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value * 1.2 + `Pounds`
            amount.style.color = "green"
        }
    } else if (amountin.value == "Euro-£") {
        amount.style.color = "green"
        if (amountto.value == "RWANDAN-RWF") {
            amount.innerHTML = money.value * 1200 + `RWF`
        } else if (amountto.value == "USD-$") {
            amount.innerHTML = money.value / 1.5 + `$`
            amount.style.color = "green"
        } else if (amountto.value == "pound") {
            amount.innerHTML = money.value * 4 + `pounds`
            amount.style.color = "green"
        }
    } else if (amountin.value == "pound") {
        amount.style.color = "green"
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
 
function checkAll() {  
    var inputs = document.querySelectorAll('.pl');   
    for (var i = 0; i < inputs.length; i++) {   
        inputs[i].checked = true;   
    }   
}  
function getCheckboxValue() {  

var l1 = document.getElementById("check1");  
var l2 = document.getElementById("check2");  
var l3 = document.getElementById("check3");  
var l4 = document.getElementById("check4");  
var l5 = document.getElementById("check5");  
var l6 = document.getElementById("check6");  
 
var res=" ";   
if (l1.checked == true){  
var pl1 = document.getElementById("check1").value;  
res = pl1 + ",";   
}   
else if (l2.checked == true){  
var pl2 = document.getElementById("check2").value;  
resres = res + pl2 + ",";   
}  
else if (l3.checked == true){  
document.write(res);  
var pl3 = document.getElementById("check3").value;  
resres = res + pl3 + ",";   
}  
else if (l4.checked == true){  
var pl4 = document.getElementById("check4").value;  
resres = res + pl4 + ",";   
}  
else if (l5.checked == true){  
var pl5 = document.getElementById("check5").value;  
resres = res + pl5 + ",";   
}  
else if (l6.checked == true){  
var pl6 = document.getElementById("check6").value;  
resres = res + pl6;   
} else {  
return document.getElementById("result").innerHTML = "You have not selected anything";  
}  
return document.getElementById("result").innerHTML = "You have selected " + res + " continet";  
}  