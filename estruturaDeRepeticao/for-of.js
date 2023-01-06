const nome = "Paulo Sergio";
const nomes = ["Paulo", "John", "Maria", "Flávio"];

//For clássico - Geralmente com iteráveis (array ou strings)

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

//For in - Retorna o índice ou chave (string, arrays ou objetos)

// for (let i in nomes) {
//   console.log(i);
// }

//For of - Retorna o valor em si (iteráveis: arrays ou strings)

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
