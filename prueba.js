
// function validarClientes(edad,hora,){
    
//     if (edad>=18){
//         if (hora>=2 && hora<=7){
//             alert("puedes pasar gratis")
//         }
//         else {
//             alert("puedes pasar pero tienes que pagar")
//         }
//     }

//     else {
//         alert("No puedes pasar, eres menor")
//     }
// }
// let free=false
// let edad= prompt("Dime tu edad")
// let hora= prompt("dime la hora")
// validarClientes(edad,hora,free)

// let cantidad = prompt("cuantos alumnos son?");
// let alumnosTotales = [];

// for (i=0 ; i<cantidad ; i++){
//     alumnosTotales[i]=[prompt("Nombre del alumno " + (i+1)),0]
// }

// const tomarAsistencia= (nombre, p)=>{ //esto se llama funcion flecha y hace lo mismo que una funcion
//     let presencia = prompt(nombre);
//     if (presencia== "p" || presencia== "P"){
//         alumnosTotales[p][1]++;
//     }
// }

// for (i=0; i<30; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno)
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado= `${alumnosTotales[alumno][0]}:<br>
//     ____Presentes: ${alumnosTotales[alumno][1]} <br>
//     ____Ausencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
//     if (30 - alumnosTotales[alumno][1] > 18){
//         resultado+= "Reprobado por inasistensias "
//     }
//     else {
//         resultado+= "<br> <br>"
//     }

//     document.write(resultado)
// }

// class animal {
// 	constructor(especie, edad, color){
// 		this.especie= especie;
// 		this.edad= edad;
// 		this.color= color
//     }

//     presentarse(){
// 	    document.write(`hola soy un ${this.especie} y tengo ${this.edad} años de edad y soy color ${this.color}`)
// }

// }

// class perro extends animal {
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = raza;
//         }
// }

// class celulares{ //Celulares POO
//   constructor(color, peso,rpantalla, rcamara, ram){
//     this.color= color;
//     this.peso= peso;
//     this.resolucionPantalla= rpantalla;
//     this.resolucionCamara= rcamara;
//     this.memoriaRam= ram;
//     this.encendido= false;
//   }

//   prenderApagar(){
//     if (this.encendido == false){
//       alert("celular prendido");
//       this.encendido = true
//     }
//     else {
//       alert("celular apagado");
//     }
//   }

//   reiniciar(){
//     if (this.encendido= true){
//       alert("celular reiniciandose");
//     }
//     else{
//       alert("el celular esta apagado");
//     }
//   }

//   tomarFoto(){
//     alert(`foto tomada en una resolucion de ${this.resolucionCamara}`);
//   }

//   grabarVideo(){
//     alert(`grabando video en una resolucion de ${this.resolucionCamara}`);
//   }

//   info(){
//     return `
//     color:<b> ${this.color} </b><br>
//     peso:<b> ${this.peso} </b><br>
//     pantalla:<b> ${this.resolucionPantalla} </b><br>
//     resolucion de camara:<b> ${this.resolucionCamara} </b><br>
//     resolucion de video:<b> ${this.resolucionCamara} </b><br>
//     memoria ram:  <b> ${this.memoriaRam} </b><br>
//     `;
//   }
// }

// // celular1= new celulares("rojo","200g","1080p","48mp","2gb");
// // celular2= new celulares("negro","250g","720p","28mp","4gb");
// // celular3= new celulares("azul","300g","1920p","64mp","8gb");

// // celular1.prenderApagar();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.reiniciar();
// // celular1.prenderApagar();

// // document.write(`
// // ${celular1.info()}<br> 
// // ${celular2.info()}<br> 
// // ${celular3.info()}<br>`);

// class celularAltaGama extends celulares{ //Celular alta gama POO
//   constructor(color, peso,rpantalla, rcamara, ram, rcamaraExtra){
//     super (color, peso,rpantalla, rcamara, ram);
//     this.resolucionCamaraExtra= rcamaraExtra;
//   }

//   grabarVideoLento(){
//     alert("estas grabando en camara lenta")
//   }

//   reconocimientoFacial(){
//     alert("reconocimiento facial")
//   }

//   infoAltaGama(){
//     return `
//     color:<b> ${this.color} </b><br>
//     peso:<b> ${this.peso} </b><br>
//     pantalla:<b> ${this.resolucionPantalla} </b><br>
//     resolucion de camara:<b> ${this.resolucionCamara} </b><br>
//     resolucion de video:<b> ${this.resolucionCamara} </b><br>
//     memoria ram:  <b> ${this.memoriaRam} </b><br>
//     camara extra: <b> ${this.resolucionCamaraExtra} </b><br>
//     `;
//   }

// }

// celular1= new celularAltaGama("rojo","200g","1080p","48mp","2gb","full HD");
// celular2= new celularAltaGama("negro","250g","720p","28mp","4gb","HD");
// celular3= new celularAltaGama("azul","300g","1920p","64mp","8gb","4k");

// document.write(`
// ${celular1.infoAltaGama()}<br> 
// ${celular2.infoAltaGama()}<br> 
// ${celular3.infoAltaGama()}<br>`);

// class App { //Objeto App POO
//   constructor(descargas, puntuacion, peso){
//     this.descargas= descargas;
//     this.puntuacion= puntuacion;
//     this.peso= peso;
//     this.iniciada= false;
//     this.instalada= false;
//   }

//   abrir(){
//     if (this.iniciada == false && this.instalada == true){
//       this.iniciada = true;
//       alert("app abierta")
//     }
//   }

//   cerrar(){
//     if (this.iniciada == true && this.instalada == true){
//       this.iniciada = false;
//       alert("app cerrada")
//     }
//   }

//   instalar(){
//     if (this.instalada == false){
//       this.instalada = true;
//       alert("app instalada correctamente")
//     }
//   }

//   desinstalar(){
//     if (this.instalada == true){
//       this.instalada = false;
//       alert("app desinstalada correctamente")
//     }
//   }

//   appInfo(){
//     return `
//     Descargas: <b>${this.descargas}</b><br>
//     Puntuacion: <b>${this.puntuacion}</b><br>
//     Peso: <b>${this.peso}</b><br>
//     `;
//   }

// }

// app1 = new App("1M","4.5","67MB")
// app2 = new App("2M","4.8","279MB")
// app3 = new App("1.56M","3.5","84MB")
// app4 = new App("500K","3.9","102MB")

// document.write(`
// ${app1.appInfo()}<br>
// ${app2.appInfo()}<br>
// ${app3.appInfo()}<br>
// ${app4.appInfo()}<br>
// `);

// let cadena = "cadena de prueba"
// let cadena2 ="cadena 2"

// resultado = cadena.concat(cadena2)

// document.write(resultado);


// let cadena = "cadena deprueba"
// let cadena2 = "prueba"

// resultado = cadena.endsWith(cadena2)

// document.write(resultado);

// let cadena = "hola como estas como te ha ido"
// let cadena2 = "estas"

// resultado = cadena.split(" ")

// document.write(resultado);


// let numeros = [1,2,3,4,5,6,7,8,9,0]

// numeros.filter(numero=> document.write(numero + "<br>"))

// let numero = Math.cbrt(25)

// document.write(numero);

// class Calculadora {
//   constructor(){

//   }

// sumar(num1,num2){
//   return parseInt(num1) + parseInt(num2);
// }

// restar(num1,num2){
//   return parseInt(num1) - parseInt(num2);
// }

// dividir(num1,num2){
//   return parseInt(num1) / parseInt(num2);
// }

// multiplicar(num1,num2){
//   return parseInt(num1) * parseInt(num2);
// }

// potenciar(num,exp){
//   return num**exp;
// }

// raizCuadrada(num){
//   return Math.sqrt(num);
// }

// raizCubica(num){
//   return Math.cbrt(num);
// }






// }

// const calculadora = new Calculadora();

// let opciones = prompt("1: sumar. 2: restar. 3: dividir. 4: multiplicar. 5: potenciar. 6: raiz cuadrada. 7: raiz cubica")

// if (opciones == 1){
//   let numero1 = prompt("primer numero")
//   let numero2 = prompt("segundo numero")

//   alert(calculadora.sumar(numero1,numero2))
// }

// if (opciones == 2){
//   let numero1 = prompt("primer numero")
//   let numero2 = prompt("segundo numero")

//   alert(calculadora.restar(numero1,numero2))
// }

// if (opciones == 3){
//   let numero1 = prompt("primer numero")
//   let numero2 = prompt("segundo numero")

//   alert(calculadora.dividir(numero1,numero2))
// }

// if (opciones == 4){
//   let numero1 = prompt("primer numero")
//   let numero2 = prompt("segundo numero")

//   alert(calculadora.multiplicar(numero1,numero2))
// }

// if (opciones == 5){
//   let numero1 = prompt("primer numero")
//   let numero2 = prompt("segundo numero")

//   alert(calculadora.potenciar(numero1,numero2));
// }

// if (opciones == 6){
//   let numero = prompt("Ingrese numero")

//   alert(calculadora.raizCuadrada(numero))
// }

// if (opciones == 7){
//   let numero = prompt("Ingrese numero")

//   alert(calculadora.raizCubica(numero))
// }

//  const obtenerInformacion = (materia)=>{
//   materias = {
//     fisica:["perez","pedro", "pepito", "cofla", "maria"],
//     programacion:["rodriguez","pedro", "juan", "pepito"],
//     logica:["hernandez","pedro", "juan", "pepito", "cofla", "maria"],
//     quimica:["dalto","pedro", "juan", "pepito", "cofla", "maria"],
//   }

//   if(materias[materia] !== undefined){
//     return [materias[materia],materia,materias];
//   }
//   else{
//     return materias
//   }

//  }

// const mostrarInformacion = (materia)=>{

//  let informacion = obtenerInformacion(materia);

//  if (informacion !== false){
//   let profesor = obtenerInformacion(materia)[0][0];
//   let alumnos = obtenerInformacion(materia)[0];
//   alumnos.shift();
//   document.write(`El profesor de <b>${informacion[1]}</b> es: <b> ${profesor}</b><br>
//   Los alumnos son: <b>${alumnos}</b> <br> <br>`);
//  }
// }

// const cantidadDeClases = (alumno)=>{
//   let informacion = obtenerInformacion();
//   let clasesPresentes = []
//   let cantidadTotal = 0;
//   for (info in informacion){
//     if (informacion[info].includes(alumno)){
//       cantidadTotal++;
//       clasesPresentes.push(" " + info)
//     }
//   }
//   return `<b>${alumno}</b> esta en: <b>${cantidadTotal}</b> clases: 
//   <b>${clasesPresentes}</b><br><br>`;

// }




// mostrarInformacion("programacion")
// mostrarInformacion("logica")
// mostrarInformacion("fisica")
// mostrarInformacion("quimica")

// document.write(cantidadDeClases("cofla"))
// document.write(cantidadDeClases("pepito"))
// document.write(cantidadDeClases("pedro"))
// document.write(cantidadDeClases("maria"))

// let materias = {
//   fisica:["perez","pedro", "pepito", "cofla", "maria"],
//   programacion:["rodriguez","pedro", "juan", "pepito"],
//   logica:["hernandez","pedro", "juan", "pepito", "cofla", "maria"],
//   quimica:["dalto","pedro", "juan", "pepito", "cofla", "maria"],
// }

// const inscribir = (alumno, materia)=>{
//   personas = materias[materia];

//   if (personas.length >= 11){
//     document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`)
//   }
//   else{
//     personas.push(alumno);
//     if (materia == "fisica"){
//       materias = {
//         fisica: personas,
//         programacion: materias["programacion"],
//         logica: materias["logica"],
//         quimica: materias["quimica"],
//       }
//     }
//     else if (materia == "programacion"){
//       materias = {
//         fisica: materias["fisica"],
//        programacion: personas,
//         logica: materias["logica"],
//         quimica: materias["quimica"],
//     }

//     }

//     else if (materia == "logica"){
//       materias = {
//         fisica: materias["fisica"],
//        programacion: materias["programacion"],
//         logica: personas,
//         quimica: materias["quimica"],
//     }

//     }

//     else if (materia == "quimica"){
//       materias = {
//         fisica: materias["fisica"],
//        programacion: materias["programacion"],
//         logica: materias["logica"],
//         quimica: personas,
//     }

//     }
//     document.write(`felicidades ${alumno} te has inscrito en ${materia} <br>`)
//   }
// } 

// document.write(materias["fisica"] + "<br>")

// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")
// inscribir("juan","fisica")

// document.write("<br>" + materias["fisica"])


// let materias = {
//   fisica: [90,6,3,"fisica"],
//   matematica: [84,8,2,"matematica"],
//   logica: [92,8,4,"logica"],
//   quimica: [96,8,4,"quimica"],
//   calculo: [91,6,3,"calculo"],
//   programacion: [79,7,4,"programacion"],
//   biologia: [75,9,2,"biologia"],
//   db: [98,9,1,"db"],
//   algebra: [100,10,4,"algebra"]
// }

// const aprobo = ()=>{
//   for (materia in materias){
//     let asistencias = materias[materia][0];
//     let promedio = materias[materia][1];
//     let trabajos = materias[materia][2];


//     console.log(`${materias[materia][3]}`);
//     if (asistencias >= 90){
      
//       console.log(`%c   Asistencias en orden`, "color:green")
//     }
//     else {
//       console.log(`%c   Falta de asistencia`, "color:red")
//     }
//     if (promedio >= 7){
//       console.log(`%c   Promedio en orden`, "color:green")
//     }
//     else {
//       console.log(`%c   Promedio desaprobado`, "color:red")
//     }
//     if (trabajos >= 3 ){
//       console.log(`%c   Trabajos practicos en orden`, "color:green")
//     }
//     else {
//       console.log(`%c   Faltan trabajos practicos`, "color:red")
//     }
//   }
// }

// aprobo()

// let trabajo = "240 minutos de trabajo";
// let estudio = "100 minutos de estudio";
// let tp = "100 minutos de tareas";
// let housework = "30 minutos de tareas para la casa";
// let descanso = "10 minutos de descanso";

// console.log("TAREAS");

// for (let i = 0; i < 14; i++){
//   if (i==0){
//     console.groupCollapsed("semana 1")
//   }

//   console.groupCollapsed("dia " + (i+1));
//   console.log(trabajo);
//   console.log(descanso);
//   console.log(estudio);
//   console.log(tp);
//   console.log(housework);
//   console.groupEnd();

//   if (i==6){
//     console.groupEnd();
//     console.groupCollapsed("semana 2")
//   }

// }

// console.groupEnd();
// console.groupEnd();


// const titulo = document.querySelector(".titulo");

// let valor = titulo.innerText;

// document.write(valor);

// const contenedor = document.querySelector(".contenedor");

// const fragmento = document.createDocumentFragment()

// for (i = 0; i < 20; i++){

//   const item = document.createElement("LI");
//   const textoDelItem = document.createTextNode(`soy un LI ${i}`);
//   item.appendChild(textoDelItem);
//   fragmento.appendChild(item);
// }

// contenedor.appendChild(fragmento);

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P")
// parrafo.innerHTML="Parrafo";

// const h2_nuevo = document.createElement("H2")

// h2_nuevo.innerHTML="titulo";

// h2_antiguo = document.querySelector(".h2");

// let respuesta = contenedor.hasChildNodes();


// const contenerdor = document.querySelector(".flex");
// document.querySelector(".send-buttom").value= "COMPRAR"
// let contador = 0;
// function crearLlave(nombre, modelo, precio){
//   contador++;
//   img = `<img src="llave.jpg" class="llave-foto">`;
//   nombre = `<h2> ${nombre}</h2>`;
//   modelo = `<h3> ${modelo}</h3>`;
//   precio = `<p> Precio: <b> $${precio}</b> <p>`;
//   return [img, nombre, modelo, precio];
// }

// const changeHidden = (number)=>{
//   document.querySelector(".key-data").value= number
// }

// let documentFragment = document.createDocumentFragment();

// for (let i = 1; i <= 20; i++){
//   let modeloRandom = Math.round(Math.random()*1000);
//   let precioRandom = Math.round(Math.random()*10+30);
//   let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
//   let div = document.createElement("DIV");
//   div.addEventListener("click", ()=>{changeHidden(modeloRandom)});
//   div.tabIndex = i;
//   div.classList.add(`item${i}`, `flex-item`);
//   div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//   documentFragment.appendChild(div);
// }

// contenerdor.appendChild(documentFragment);


