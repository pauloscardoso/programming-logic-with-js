const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

console.log(pessoa);

const {
  nome: name,
  idade: age,
  endereco: { rua: street, numero: number },
  endereco: address,
  ...rest
} = pessoa;
console.log(name, age);
console.log(street, number);
console.log(address);
console.log('rest', rest);
