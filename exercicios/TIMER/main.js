const relogio = document.querySelector(".relógio");
// const iniciar = document.querySelector(".iniciar");
// const pausar = document.querySelector(".pausar");
// const zerar = document.querySelector(".zerar");
let seconds = 0;
let timer;

function createHours(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function startClock() {
  timer = setInterval(() => {
    seconds++;
    relogio.innerHTML = createHours(seconds);
  }, 50);
}

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    startClock();
  }
  if (element.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }
  if (element.classList.contains("zerar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    seconds = 0;
  }
});

// iniciar.addEventListener("click", (event) => {
//   relogio.classList.remove("pausado");
//   clearInterval(timer);
//   startClock();
// });
// pausar.addEventListener("click", (event) => {
//   relogio.classList.add("pausado");
//   clearInterval(timer);
// });
// zerar.addEventListener("click", (event) => {
//   relogio.classList.remove("pausado");
//   clearInterval(timer);
//   relogio.innerHTML = "00:00:00";
//   seconds = 0;
// });
