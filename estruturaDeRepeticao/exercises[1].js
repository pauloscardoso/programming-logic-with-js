//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (width, height) => width > height;

const width = 1920;
const height = 1080;
console.log(ePaisagem(width, height));
