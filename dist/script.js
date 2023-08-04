let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
}

function clearDisplay() {
  // Clear the calculator display
  document.getElementById("display").value = "";
}

function calculate() {
  const displayValue = document.getElementById("display").value;
  let result;

  try {
      result = eval(displayValue);
  } catch (error) {
    result = "Error";
  }

    document.getElementById("display").value = result;
}