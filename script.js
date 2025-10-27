const display = document.getElementById("display");
function addToDisplay(input) {
    display.value += input;
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function clear1() {
    display.value = "";
}
function square(display) {
    let current = document.getElementById("display").value;
    if (current) {
        document.getElementById("display").value = Math.pow(parseFloat(current), 2);
    }
}

