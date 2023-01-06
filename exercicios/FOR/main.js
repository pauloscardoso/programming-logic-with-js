const elementos = [
  { tag: "p", texto: "Texto qualquer1" },
  { tag: "div", texto: "Texto qualquer2" },
  { tag: "section", texto: "Texto qualquer3" },
  { tag: "p", texto: "Texto qualquer4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  // tagCriada.innerHTML = texto;
  // tagCriada.innerText = texto;
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
  // console.log(texto);
}

container.appendChild(div);
