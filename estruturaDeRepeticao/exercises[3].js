//Escreva uma função que recebe um número e retorne o seguinte:
//Se o número for divisível por 3 retorna Fizz
//Se o número for divisível por 5 retorna Buzz
//Se o número for divisível por 3 e 5 retorna FizzBuzz
//Se o número não for divisível por 3 e 5 retorna o próprio número
//Checar se o número é realmente um número
//Use a função com números de 0 a 100

const fizzBuzz = (num) => {
  if (typeof num !== "number") return NaN;
  if (num % 5 !== 0 && num % 3 !== 0) return num + " nem um nem outro";
  if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  // return num;
};

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
