//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função

const verdadeira = true;

let nome = "Luiz"; //escopo global
var nome2 = "Luiz"; //escopo global

// if (verdadeira) {
//   let nome = "Otávio"; //escopo de bloco
//   console.log(nome, nome2);
//   if (verdadeira) {
//     let nome = "Outro nome"; //escopo de bloco
//     let nome2 = "Outro nome 2"; //escopo de bloco
//     console.log(nome, nome2);
//   }
// }

// if (verdadeira) {
//   let nome = "Otávio"; //escopo de bloco
//   var nome2 = "Rogério"; //escopo de bloco
//   if (verdadeira) {
//     let nome = "Outro nome"; //escopo de bloco
//     var nome2 = "Ronaldo"; //escopo de bloco
//   }
// }
// console.log(nome, nome2);

// var sobrenome = "Cardoso";

// function falaOi() {
//   var nome = "Paulo";
//   console.log(nome);
//   console.log(sobrenome);
//   if (verdadeira) {
//     let nome = "Gustavo"
//   }
//   console.log(nome);
// }

// falaOi();

//hoisting não funciona com VAR
console.log(teste)
var teste = 'teste'
