const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso || !altura)
    return setResultado("Informe o peso e a altura corretamente.", false);
  const imc = getImc(peso, altura);
  const nivelImc = getIndiceImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`;
  setResultado(msg, true);
});

function getIndiceImc(imc) {
  const indice = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return indice[5];
  if (imc >= 34.9) return indice[4];
  if (imc >= 29.9) return indice[3];
  if (imc >= 24.9) return indice[2];
  if (imc >= 18.5) return indice[1];
  if (imc < 18.5) return indice[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaParagrafo();
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
