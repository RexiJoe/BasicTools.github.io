//SELECT
let selectInput = document.getElementById("select-input");
let selectOutput = document.getElementById("select-output");
//OPTIONS
let milimetroC = document.getElementById("option-milimetro-c");
let centimetroC = document.getElementById("option-centimetro-c");
let decimetroC = document.getElementById("option-decimetro-c");
let metroC = document.getElementById("option-metro-c");
let litro = document.getElementById("option-litro");
//INPUTS
let firstInput = document.getElementById("first-input");
let secondInput =document.getElementById("second-input");

let valorIntermedio = 0; //Litros

const convertir1 = ()=>{
    //CONVERTIR A UN VALOR UNITARIO
    if (selectInput.value == litro.value){
        valorIntermedio = parseFloat(firstInput.value);
    }
    if (selectInput.value == milimetroC.value){
        valorIntermedio = firstInput.value / 1000000;
    }
    if (selectInput.value == centimetroC.value){
        valorIntermedio = firstInput.value / 1000
    }
    if (selectInput.value == decimetroC.value){
        valorIntermedio = firstInput.value * 1;
    }
    if (selectInput.value == metroC.value){
        valorIntermedio = firstInput.value * 1000;
    }
    //CONVERTIR A LA RESPUESTA
    if (selectOutput.value == litro.value){
        secondInput.value = valorIntermedio * 1;
    }
    if (selectOutput.value == milimetroC.value){
        secondInput.value = valorIntermedio * 1000000;
    }
    if (selectOutput.value == centimetroC.value){
        secondInput.value = valorIntermedio * 1000;
    }
    if (selectOutput.value == decimetroC.value){
        secondInput.value = valorIntermedio / 1;
    }
    if (selectOutput.value == metroC.value){
        secondInput.value = valorIntermedio / 1000;
    }
}

const convertir2 = ()=>{

    if (selectOutput.value == litro.value){
        valorIntermedio = parseFloat(selectOutput.value);
    }
    if (selectOutput.value == milimetroC.value){
       valorIntermedio = secondInput.value / 1000000;
    }
    if (selectOutput.value == centimetroC.value){
        valorIntermedio = secondInput.value / 1000
    }
    if (selectOutput.value == decimetroC.value){
        valorIntermedio = secondInput.value * 1;
    }
    if (selectOutput.value == metroC.value){
        valorIntermedio = secondInput.value * 1000;
    }
    //CONVERTIR A LA RESPUESTA
    if (selectInput.value == litro.value){
        firstInput.value = valorIntermedio * 1;
    }
    if (selectInput.value == milimetroC.value){
        firstInput.value = valorIntermedio * 1000000;
    }
    if (selectInput.value == centimetroC.value){
        firstInput.value = valorIntermedio * 1000;
    }
    if (selectInput.value == decimetroC.value){
        firstInput.value = valorIntermedio / 1;
    }
    if (selectInput.value == metroC.value){
        firstInput.value = valorIntermedio / 1000;
    }
}

selectInput.onchange = convertir1;
firstInput.onchange = convertir1;

selectOutput.onchange = convertir2;
secondInput.onchange = convertir2;

