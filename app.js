// EJERCICIO 1
//  crear un array de frutas y agregarle al final "uva"

const frutas = ["manzana", "plátano", "naranja"];
console.log("el array original es " + frutas);
frutas.push("uva");
console.log("el array modificado es " + frutas);
frutas.pop();

// EJERCICIO 2
// crear un array y multiplicarlo por 2 con .map()

const numeros = [1, 2, 3, 4, 5];
console.log("el array original es " + numeros);

const numerosMultiplicados = numeros.map((num) => {
  return num * 2;
});

console.log("el array modificado es " + numerosMultiplicados);


//EJERCICIO 3
// crear un array de objetos y filtrar los que tengan un precio mayor a 10