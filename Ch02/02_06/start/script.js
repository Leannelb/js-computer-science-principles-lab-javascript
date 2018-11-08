// JavaScript Document

var subtotal = 15.00;
//this is a literal var as the value has been specifically defined

console.log("Subtotal: " + subtotal);
//third way is using functions as variables - it NEEDs to return a value though


var total = subtotal + calculateTax(0.08);

console.log("Total: " + total);

function calculateTax(taxRate, amountToTax)
{
    var tax = amountToTax * taxRate;
    console.log("Tax: " + tax);
    return tax;
}
