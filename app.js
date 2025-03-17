// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function sortearAmigo() {
    // Validar si hay amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sorteo.";
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo y agregar elementos <li>
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    // Obtener el valor del campo de entrada
    let input = document.getElementById("amigo"); // Corregido el ID para coincidir con el HTML
    let nombre = input.value.trim();
    
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en la interfaz
    mostrarListaAmigos();
    
}
function reiniciarJuego() {
    // Reiniciar el array de amigos
    amigos = [];
    
    // Limpiar la lista y el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}