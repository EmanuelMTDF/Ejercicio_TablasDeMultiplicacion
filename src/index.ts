// EJERCICIO "TABLAS DE MULTIPLICACIÓN"

/*
• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/

let numero: number = Number(prompt("Por favor, ingrese un número"));
let numeroFinal: number = Number(
  prompt("Indique hasta qué numero desea multiplicarlo")
);
let contador: number = 0;

for (contador; contador <= numeroFinal; contador++) {
  let resultado: number = numero * contador;
  console.log(`${numero} x ${contador} = ${resultado}`);
}
