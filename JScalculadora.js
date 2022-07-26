
calcDisplayNumbers = document.getElementById("calc-display-numbers");

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("cero");

let igual = document.getElementById("igual");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");

let punto = document.getElementById("punto");
let Delete = document.getElementById("delete");
let C = document.getElementById("c");

one.addEventListener("click", ()=>{calcDisplayNumbers.value+="1"})
two.addEventListener("click", ()=>{calcDisplayNumbers.value+="2"})
three.addEventListener("click",()=>{calcDisplayNumbers.value+="3"})
four.addEventListener("click",()=>{calcDisplayNumbers.value+="4"})
five.addEventListener("click",()=>{calcDisplayNumbers.value+="5"})
six.addEventListener("click",()=>{calcDisplayNumbers.value+="6"})
seven.addEventListener("click",()=>{calcDisplayNumbers.value+="7"})
eight.addEventListener("click",()=>{calcDisplayNumbers.value+="8"})
nine.addEventListener("click",()=>{calcDisplayNumbers.value+="9"})
zero.addEventListener("click",()=>{calcDisplayNumbers.value+="0"})

igual.addEventListener("click",()=>{calcDisplayNumbers.value=eval(calcDisplayNumbers.value)})
suma.addEventListener("click",()=>{calcDisplayNumbers.value+="+"})
resta.addEventListener("click",()=>{calcDisplayNumbers.value+="-"})
multiplicar.addEventListener("click",()=>{calcDisplayNumbers.value+="*"})
dividir.addEventListener("click",()=>{calcDisplayNumbers.value+="/"})

punto.addEventListener("click",()=>{calcDisplayNumbers.value+="."})
Delete.addEventListener("click",()=>{ 
    let lastChar = calcDisplayNumbers.value;
    lastChar = lastChar.substring(0, lastChar.length - 1);
    calcDisplayNumbers.value=lastChar;
})
C.addEventListener("click",()=>{calcDisplayNumbers.value=""})




