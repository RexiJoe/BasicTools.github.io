let selectInput = document.getElementById("select-input");
let selectOutput = document.getElementById("select-output");
let celsiusOption = document.getElementById("option-celsius");
let kelvinOption = document.getElementById("option-kelvin");
let fahrenheitOption = document.getElementById("option-fahrenheit");
let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input")
let valorIntermedio = 0

const convertir1 = ()=>{
    if (selectInput.value == celsiusOption.value){
        valorIntermedio = parseFloat(firstInput.value);
    }
    if (selectInput.value == fahrenheitOption.value){
        valorIntermedio = (firstInput.value - 32) * 5/9;
    }
    if (selectInput.value == kelvinOption.value){
        valorIntermedio = firstInput.value - 273.15;
    }
    if (selectOutput.value == celsiusOption.value){
        secondInput.value = valorIntermedio; 
    }
    if (selectOutput.value == fahrenheitOption.value){
        secondInput.value = (valorIntermedio * 9/5) + 32;
    }
    if (selectOutput.value == kelvinOption.value){
    secondInput.value = valorIntermedio + 273.15;
    }
}

const convertir2 = ()=>{
    if (selectOutput.value == celsiusOption.value){
        valorIntermedio = parseFloat(secondInput.value);
    }
    if (selectOutput.value == fahrenheitOption.value){
        valorIntermedio = (secondInput.value - 32) * 5/9;
    }
    if (selectOutput.value == kelvinOption.value){
        valorIntermedio = secondInput.value - 273.15;
    }

    if (selectInput.value == celsiusOption.value){
        firstInput.value = valorIntermedio;
    }
    if (selectInput.value == fahrenheitOption.value){
        firstInput.value = (valorIntermedio * 9/5) + 32;
    }
    if (selectInput.value == kelvinOption.value){
        firstInput.value = valorIntermedio + 273.15;
    }
}
//PRIMERA ENTRADA
firstInput.onchange = convertir1;
selectInput.onchange = convertir1;
//SEGUNDA ENTRADA
secondInput.onchange = convertir2;
selectOutput.onchange = convertir2;