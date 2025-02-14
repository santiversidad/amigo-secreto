let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    console.log("Lista de amigos:", amigos);

    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    input.value = "";
}

function añadirTexto(id, texto) {
    let elemento = document.getElementById(id);
    if (elemento) {
        elemento.innerHTML = texto;
    }
}

function sortearAmigosCuandoNoHay() {
    if (amigos.length === 0) {
        añadirTexto("mensajeSorteo", "No hay amigos que sortear");
        return;
    }
}

function mostrarResultado(nombreAmigo) {
    añadirTexto("resultado", `El amigo sorteado es: <strong>${nombreAmigo}</strong>`);
}

function sortearAmigosCuandoHay() {

    console.log(amigos.length)
    let numeroAleatorio = Math.floor(Math.random() * amigos.length)
    console.log(numeroAleatorio)

    let NombreAmigo = amigos[numeroAleatorio]
    console.log(NombreAmigo)

    mostrarResultado(NombreAmigo)
}


function manejarSorteo() {

    if (amigos.length === 0) {
        sortearAmigosCuandoNoHay();
    } else {
        sortearAmigosCuandoHay();
    }

}

