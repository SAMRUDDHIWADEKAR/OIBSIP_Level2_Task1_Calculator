// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value
    var q = eval(p);
    document.getElementById("result").value = q;
}

//Displaying values
function display(value) {
    document.getElementById("result").value += value;
}

// Clear all the values on display
function clearScreen() {
    document.getElementById("result").value = "";
}