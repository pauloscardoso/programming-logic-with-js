const nome = "Paulo Sergio";
const nomes = ["Paulo", "John", "Maria", "Flavio"];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// for (let i in nomes) {
//   console.log(i);
// }

// for (let i of nomes) {
//   console.log(i);
// }

nomes.forEach((element, index) => {
  console.log(element, index);
});

const pessoa = {
  nome: "Paulo",
  sobrenome: "Cardoso",
};

for (let i in pessoa) {
  console.log(pessoa[i]);
}
