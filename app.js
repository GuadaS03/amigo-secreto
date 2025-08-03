let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresá un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpiar campo
  actualizarLista();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let amigo of amigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "No hay amigos para sortear.";
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  resultado.innerHTML = ` El ganador del sorteo es: <strong>${ganador}</strong>, felicitaciones!!`;
}
