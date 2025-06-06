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


//EJERCICIO 3 (prueba)


//para crear el repo
//1ro git init
//2do git add .
//3ro git commit -m "mensaje de commit"
//4to git remote add origin <url del repo>
//5to git branch -M main (lo saltean si ya tienen un main)
//6to git push -u origin main

// una vez creado el repo
// 1ro git add .
// 2do git commit -m "mensaje de commit"
// 3ro git push

