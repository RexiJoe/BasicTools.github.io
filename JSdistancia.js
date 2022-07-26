let selectInput = document.getElementById("select-input");
let selectOutput = document.getElementById("select-output");
let kilometroOption = document.getElementById("option-kilometro");
let metroOption = document.getElementById("option-metro");
let centimetroOption = document.getElementById("option-centimetro");
let milimetroOption = document.getElementById("option-milimetro");
let firstInput = document.getElementById("first-input");
let secondInput = document.getElementById("second-input")
let valorIntermedio = 0

const convertir1 = ()=>{
    if (selectInput.value == metroOption.value){
        valorIntermedio = parseFloat(firstInput.value);
    }
    if (selectInput.value == kilometroOption.value){
        valorIntermedio = firstInput.value * 1000;
    }
    if (selectInput.value == centimetroOption.value){
        valorIntermedio = firstInput.value / 100;
    }
    if (selectInput.value == milimetroOption.value){
        valorIntermedio = firstInput.value / 1000;
    }

    if (selectOutput.value == metroOption.value){
        secondInput.value = valorIntermedio; 
    }
    if (selectOutput.value == kilometroOption.value){
        secondInput.value = valorIntermedio / 1000;
    }
    if (selectOutput.value == centimetroOption.value){
    secondInput.value = valorIntermedio * 100 ;
    }
    if (selectOutput.value == milimetroOption.value){
        secondInput.value = valorIntermedio * 1000
    }
}

const convertir2 = ()=>{
    if (selectOutput.value == metroOption.value){
        valorIntermedio = parseFloat(secondInput.value);
    }
    if (selectOutput.value == kilometroOption.value){
        valorIntermedio = secondInput.value * 1000;
    }
    if (selectOutput.value == centimetroOption.value){
        valorIntermedio = secondInput.value / 100;
    }
    if (selectOutput.value == milimetroOption.value){
        valorIntermedio = secondInput.value / 1000;
    }

    if (selectInput.value == metroOption.value){
        firstInput.value = valorIntermedio; 
    }
    if (selectInput.value == kilometroOption.value){
        firstInput.value = valorIntermedio / 1000;
    }
    if (selectInput.value == centimetroOption.value){
        firstInput.value = valorIntermedio * 100 ;
    }
    if (selectInput.value == milimetroOption.value){
        firstInput.value = valorIntermedio * 1000
    }
}
//PRIMERA ENTRADA
firstInput.onchange = convertir1;
selectInput.onchange = convertir1;
//SEGUNDA ENTRADA
secondInput.onchange = convertir2;
selectOutput.onchange = convertir2;