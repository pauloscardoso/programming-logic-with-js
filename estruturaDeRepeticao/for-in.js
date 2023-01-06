const frutas = ["Pera", "Maçã", "Uva"];

const pessoa = {
  nome: "Paulo",
  sobrenome: "Cardoso",
  idade: 29,
};

// console.log(pessoa["nome"]);

// for(let i in frutas){
//   console.log(frutas[i])
// }

for (let i in pessoa) {
  console.log(pessoa[i]);
}

// for (let i of frutas) {
//   console.log(i);
// }
