let display = document.getElementById("display");
let isCalculationDone = false;

function appendValue(value) {
  if (isCalculationDone && isNaN(value)) {
    isCalculationDone = false;
  }
  if (isCalculationDone && !isNaN(value)) {
    clearDisplay();
    isCalculationDone = false;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  isCalculationDone = false;
}

function calculate() {
  let result = eval(display.value);
  display.value = result;
  isCalculationDone = true; 
}

function clearLastDigit() {
  display.value = display.value.slice(0, -1);
}