let a = "A"; //B
let b = "B"; //C
let c = "C"; //A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

const [primeiroNumero, segundoNumero, ...rest] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(rest);

const array = [
//    0
// 0  1  2
  [1, 2, 3],
//    1
// 0  1  2
  [4, 5, 6],
//    2
// 0  1  2
  [7, 8, 9],
];

const [, [, , seis]] = array;
console.log(seis);

const [lista1, lista2, lista3] = array;
console.log(lista3[2]);
