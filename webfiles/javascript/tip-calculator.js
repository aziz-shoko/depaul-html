function calculateTip() {
    // make a variable called billAmount
    var billAmount = parseFloat(document.getElementById("amountBox").value);

    // make a variable called tipPercent
    var tipPercent = parseFloat(document.getElementById("tipBox").value);

    // make a variable called tipAmount
    var tipAmount = (billAmount * (tipPercent/100)).toFixed(2);

    // make a variable called total
    var total = (billAmount + parseFloat(tipAmount));

    // write tipAmount and total to output
    //document.getElementById("output").innerHTML = "Your tip amount is $" + tipAmount + "<br><br>Your total is $" + total;

    //conditional based on tipPercent
    if (tipPercent <= 5) {
        alert("You cheap person!");
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.getElementById("output").innerHTML = "Your tip amount is $" + tipAmount + "<br><br>Your total is $" + total;

    } else if ((tipPercent > 5) && (tipPercent < 15)) {
        alert("Is it typical to tip 15%");
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
        document.getElementById("output").innerHTML = "Your tip amount is $" + tipAmount + "<br><br>Your total is $" + total;

    } else {
        alert("Thank you!");
        document.body.style.backgroundColor = "lightgreen";
        document.body.style.color = "white";
        document.getElementById("output").innerHTML = "Your tip amount is $" + tipAmount + "<br><br>Your total is $" + total;
    }
}

function resetDefaultValues() {
    // set the value of amountBox to an empty string
    document.getElementById("amountBox").value = "";

    // set the value of tipBox to 15
    document.getElementById("tipBox").value = 15;

    // set the innerHTML of output to a space
    document.getElementById("output").value = "&nbsp;";

    // set the page's backgroundColor to lightyellow
    document.body.style.backgroundColor = "lightyellow";

    // set the page's text color to black
    document.body.style.color = black;
}