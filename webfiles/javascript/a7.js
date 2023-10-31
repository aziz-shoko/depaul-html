function addNumbers() {
    // make a variable for the value of box1
    var value1 = parseFloat(document.getElementById("box1").value);

    // make a variable for the value of box2
    var value2 = parseFloat(document.getElementById("box2").value);

    // make a variable for the total
    var total = value1 + value2;

    // put the total in the answer span
    document.getElementById("answer").innerHTML = total;

    // put a + sign in the sign span
    document.getElementById("sign").innerHTML = "+";
}

function substract() {
    var value1 = parseFloat(document.getElementById("box1").value);
    var value2 = parseFloat(document.getElementById("box2").value);
    var difference = value1 - value2

    document.getElementById("answer").innerHTML = difference;
    document.getElementById("sign").innerHTML = "-";
}

function multiply() {
    var value1 = parseFloat(document.getElementById("box1").value);
    var value2 = parseFloat(document.getElementById("box2").value);
    var product = value1 * value2

    document.getElementById("answer").innerHTML = product;
    document.getElementById("sign").innerHTML = "*";
}

function divide() {
    var value1 = parseFloat(document.getElementById("box1").value);
    var value2 = parseFloat(document.getElementById("box2").value);
    var quotient = value1 / value2

    document.getElementById("answer").innerHTML = quotient;
    document.getElementById("sign").innerHTML = "/";
}

function clearValues() {
    document.getElementById("box1").value = "";
    document.getElementById("box2").value = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("sign").innerHTML = "&nbsp;";
}