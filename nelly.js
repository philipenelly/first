var password=document.getElementById("password").value;
var name=document.getElementById("name").value;
function philipe(){
if(password.value.length>3){
    document.getElementById("answerpassword").innerHTML="enter password which is not less than 3"
}
else{
    alert("welldone")
}
}