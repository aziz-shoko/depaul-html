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