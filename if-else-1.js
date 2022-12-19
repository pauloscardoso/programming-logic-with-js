// const hora = 50;

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth();
const hora = data.getHours();
const minutos = data.getMinutes();
const ano = data.getFullYear();
const horaEMinuto = `Hoje é dia ${dia} do ${mes} de ${ano} e agora são: ${hora}h e ${minutos}min`;
setInterval(() => console.log(horaEMinuto), 1000 * 60);

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa Tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
  console.log("Erro no sistema!");
}

