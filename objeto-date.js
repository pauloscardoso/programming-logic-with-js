// const tresHoras = 60 * 60 * 3 * 1000; //10800000 milliseconds
// const umDia = 60 * 60 * 24 * 1000; // 86400000 milliseconds
// const data = new Date(0 + tresHoras + umDia); //01/01/1970 - Timestamp unix ou época unix
// console.log(data.toString())

// const data = new Date() //ano, mes, data, horas, minutos, segundos, milissegundos
// const data = new Date('2019-04-25 20:20:58')
// console.log(data.toString())
// console.log('Dia', data.getDate())
// console.log('Mes', data.getMonth() + 1) // mês começa no zero.
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minutos', data.getMinutes())
// console.log('Segundos', data.getSeconds())
// console.log('milissegundos', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 = domingo,6 = sábado
// console.log(Date.now()) // milésimos de segundos = 1671492220171

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
