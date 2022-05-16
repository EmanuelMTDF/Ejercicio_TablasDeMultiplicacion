// EJERCICIO "TABLAS DE MULTIPLICACIÓN"

let numero: number = Number(prompt("Por favor, ingrese un número"));
let numeroFinal: number = Number(
  prompt("Indique hasta qué numero desea multiplicarlo")
);
let contador: number = 0;

for (contador; contador <= numeroFinal; contador++) {
  let resultado: number = numero * contador;
  console.log(`${numero} x ${contador} = ${resultado}`);
}
