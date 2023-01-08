const input = document.querySelector(".input-tarefa");
const btn = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  input.value = "";
  input.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar essa tarefa");
  li.appendChild(botaoApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", " ").trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

btn.addEventListener("click", () => {
  if (!input.value) return;
  criaTarefa(input.value);
});

input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!input.value) return;
    criaTarefa(input.value);
  }
});

document.addEventListener("click", (e) => {
  const el = e.target;
  const contains = el.classList.contains("apagar");
  if (contains) {
    el.parentElement.remove();
    salvarTarefas();
  }
});
