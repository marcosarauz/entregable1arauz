function comprar(nombre, tipodeentrada, edad){
const entradas =["plateaA", "plateaB", "plateaC", "palcos"];

nombre = prompt("ingrese su nombre");

while(nombre === "" || !isNaN(nombre)){
    alert("ingrese un dato valido");
    nombre = prompt("ingrese su nombre");
}

tipodeentrada = prompt( nombre + " ingrese su tipo de entrada: " + entradas);


while(tipodeentrada === "" || !isNaN(tipodeentrada)){
    alert("ingrese un dato valido");
    tipodeentrada = prompt("ingrese su tipo de entrada");
}

if(tipodeentrada == entradas[0] || tipodeentrada === entradas[1] || tipodeentrada === entradas[2] || tipodeentrada === entradas[3]){
    confirm( nombre + " ingrese su edad para verificar si usted puede obtener entradas")
}else{
    alert("usted a ingresado una opcion no valida");
    return nombre;
}

edad = parseInt(prompt("ingrese su edad"));


while(isNaN(edad) || edad <= 0){
    alert("ingrese un dato valido");
    edad = parseInt(prompt("ingrese su edad"));
}
if(edad < 18){
    alert(nombre + " usted es menor de edad no puede obtener entradas")
}else if(edad >= 18){
    confirm( nombre + " usted a obtenido su entrada con exito");
}
}

comprar();

