/*
Created By Rahul Yadav on 23-01-2021

*/
var attempt = 3;
function validate() {
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("Password").value;
    if (username == "kuldeepsaini" && password == "kuldeepsaini") {
       // alert("Login successfully");
       document.getElementById("demo").innerHTML = "Login Succesfull";
        window.location = "index.hbs"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
       // alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        document.getElementById("demo").innerHTML = "You have left " + attempt + " attempt";
        if (attempt == 0) {
            document.getElementById("UserName").disabled = true;
            document.getElementById("Password").disabled = true;
            document.getElementById("Submit").disabled = true;
            document.getElementById("demo").innerHTML = "Connect Your Admin";
            return false;
        }
    }
}