// const nome = 'Luiz'
// let i = 0

// while (i <= nome.length) {
//   console.log(i)
//   i++
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;

let rand = random(min, max);

// ----> While <----
// while (rand !== 10) {
//   rand = random(min, max);
//   console.log(rand);
// }

// ----> Do While <----
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

// ----> Break and Continue <----

// ----> For clássico <----
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numeros.length; i++) {
//   let numero = numeros[i];
//   if (numero === 2) {
//     console.log("Pulei o", numero);
//     continue; // pula o valor indicado
//   }
//   if (numero === 7) {
//     console.log("parou no", numero);
//     break;
//   }
//   console.log(numero);
// }

// ----> While <----
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// while (i < numeros.length) {
//   let numero = numeros[i];
//   if (numero === 2) {
//     console.log("Pulei o", numero);
//     i++;
//     continue; // pula o valor indicado
//   }
//   if (numero === 7) {
//     console.log("parou no", numero);
//     break;
//   }
//   console.log(numero);
//   i++;
// }

// ----> Do while <----
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// do {
//   let numero = numeros[i];
//   if (numero === 2) {
//     console.log("Pulei o", numero);
//     i++;
//     continue; // pula o valor indicado
//   }
//   if (numero === 7) {
//     console.log("parou no", numero);
//     break;
//   }
//   console.log(numero);
//   i++;
// } while (i < numeros.length);

// ----> For of <----
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let numero of numeros) {
//   if (numero === 2) {
//     console.log('Pulei o', numero)
//     continue; // pula o valor indicado
//   }
//   if(numero === 7){
//     console.log('parou no', numero)
//     break;
//   }
//   console.log(numero);
// }

// ----> For in <----
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i in numeros) {
//   let numero = numeros[i];
//   if (numero === 2) {
//     console.log("Pulei o", numero);
//     continue; // pula o valor indicado
//   }
//   if (numero === 7) {
//     console.log("parou no", numero);
//     break;
//   }
//   console.log(numero);
// }
