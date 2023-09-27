function adicionarTarefa() {
var tarefaInput = document.getElementById("tarefa");
var tarefaTexto = tarefaInput.value.trim();


if (tarefaTexto === "") {
alert("Por favor, insira uma tarefa válida.");
return;
}


var lista = document.getElementById("lista");
var novaTarefa = document.createElement("li");
novaTarefa.innerHTML = `
${tarefaTexto}
<button onclick="removerTarefa(this)">Remover</button>
`;
lista.appendChild(novaTarefa);


tarefaInput.value = "";
}


function removerTarefa(botao) {
var tarefa = botao.parentElement;
tarefa.remove();
}
