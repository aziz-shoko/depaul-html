// write a function to hide box2
function hideBox2() {
    document.getElementById("box2").style.display = "none";
}
// write a function to disable resetButton
function disableResetButton() {
    document.getElementById("resetButton").disabled = true;
}

// write a function to say hello
function sayHello() {
    // get the value of yourName and make a variable
    var name = document.getElementById("yourName").value;

    // show box2
    document.getElementById("box2").style.display = "block";

    // write the message in box2
    document.getElementById("box2").innerHTML = "Hello, <strong>" + name + "</strong>, How are you today?";

    // hide box1
    document.getElementById("box1").style.display = "none";

    // enable resetButton
    document.getElementById("resetButton").disabled = false;

    // disable sayHelloButton
    document.getElementById("sayHelloButton".disabled = true);
}

// write a function to reset everything
function reset() {
    // set the value of yourName to an empty string
    document.getElementById("yourName").value = "";

    // show box1
    document.getElementById("box1").style.display = "block";

    // hide box2
    document.getElementById("box2").style.display = "none";

    // disable resetButton
    document.getElementById("resetButton").disabled = true;

    // enable sayHelloButton
    document.getElementById("sayHelloButton").disabled = false;

    // alert message
    alert("Goodbye");
}