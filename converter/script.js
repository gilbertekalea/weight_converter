
const selected = document.getElementById("selection");
const userInput = document.getElementById("input");

function WeightConverter() {
  if (selected.value === "lb") {
    ConvertfromPound(userInput.value);
  } else if (selected.value === "kg") {
    ConvertfromKilograms(userInput.value);
  } else if (selected.value === "g") {
    ConvertfromGrams(userInput.value);
  } else if (selected.value === "oz") {
    ConvertfromOunces(userInput.value);
  } else console.log("error");
}

function ConvertfromPound(pound) {
  let pounds = document.getElementById("pound").textContent = userInput.value + "lb";
  let grams = document.getElementById("gram").textContent = pound / 0.0022046 + "g";
  let kilograms = document.getElementById("kilo").textContent = pound / 2.2046 + "kg";
  let ounces = document.getElementById("ounce").textContent = pound * 16 + "oz";
  console.log("from pouds", grams, kilograms, ounces, pounds);
}

function ConvertfromKilograms(kilograms) {
  let kilogram = document.getElementById("kilo").textContent = userInput.value + "kg";
  let pounds = document.getElementById("pound").textContent = kilograms * 2.2046 + "lb";
  let grams = document.getElementById("gram").textContent =kilograms * 1000 + "g";
  let ounces =document.getElementById("ounce").textContent =kilograms * 35.274 + "oz";
  console.log("from Kg", grams, pounds, ounces, kilogram);
}

function ConvertfromOunces(ounces) {
  let ounce = document.getElementById("ounce").textContent=userInput.value + "oz";
  let pounds = document.getElementById("pound").textContent= ounces * 0.0625 + "lb";
  let kilograms = document.getElementById("kilo").textContent= ounces / 35.274 + "kg";
  let grams = document.getElementById("gram").textContent= ounces / 0.035274 + "g";
  console.log("from ounces", grams, kilograms, pounds, ounce);
}

function ConvertfromGrams(grams) {
  let gram = document.getElementById("gram").textContent = userInput.value + "g";
  let pounds = document.getElementById("pound").textContent= grams * 0.0022046 + "lb";
  let kilograms = document.getElementById("kilo").textContent= grams / 1000 + "kg";
  let ounces = document.getElementById("ounce").textContent = grams * 0.035274 + "oz";
  console.log("from grams", pounds, kilograms, ounces, gram);
}
