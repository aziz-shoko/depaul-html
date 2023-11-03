function calculateTotal()  {
    // make a variable called total
    var total = new Number;

    // determine the starting value of total based on sieze selected
    if (document.getElementById("small").selected) {
        total = 10.00;
    } else if (document.getElementById("medium").selected) {
        total = 12.50;
    } else if (document.getElementById("large").selected) {
        total = 15.00;
    } else {
        document.getElementById("size").style.color = "red";
        alert("Please select a size!");
    }

    // add costs for extra toppings
    if (document.getElementById("extracheese").checked) {
        total += 2;
    } // add for 5 more toppings here (each is its own if statement)
    if (document.getElementById("pepperoni").checked) {
        total += 2.25;
    }
    if (document.getElementById("sausage").checked) {
        total += 3;
    }
    if (document.getElementById("pineapple").checked) {
        total += 4.50;
    }
    if (document.getElementById("chicken").checked) {
        total += 1.75;
    }
    if (document.getElementById("bacon").checked) {
        total += 1.50;
    }
    // add 11.25% sales tax
    total = total + (total * 0.1125);

    // add delivery charge if delivery is checked
    if (document.getElementById("pickup").checked) {
        total += 0;
    } else if (document.getElementById("delivery").checked) {
        total += 3.00;
    } else {
        document.getElementById("pickupOrDelivery").style.color = "red";
        alert("Please select Pickup or Delivery!");
    }
    // write results to output
    document.getElementById("output").innerHTML = "Your total cost is $" + total.toFixed(2);


}