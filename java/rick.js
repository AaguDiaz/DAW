document.getElementById("filtro").addEventListener("click", mostrarfiltro);
document.getElementById("todos").addEventListener("click", mostrartodos);
document.getElementById("buscar").addEventListener("click", mostrarbusqueda);

function mostrarfiltro(){
    var filtro = document.getElementById("filtros");
    if(filtro.style.display === "none"){
        filtro.style.display = "block";
    }else{
        filtro.style.display = "none";
    }
}

function mostrartodos(){
    limpiar();
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => busquedapersonajes(data.results))
    .catch (error => mostrarerror(error));
}

function mostrarbusqueda() {
    var name = document.getElementById('nombre').value;
    var status = document.getElementById('estado').value.toLowerCase();
    var species = document.getElementById('especie').value;
    var type = document.getElementById('tipo').value;
    var gender = document.getElementById('genero').value.toLowerCase();
    
    
    var url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`;
    

    fetch(url)
    .then(response => response.json())
    .then(data => busquedapersonajes(data.results))
    .catch(error => mostrarerror(error));
}

function busquedapersonajes(personajes){
    var divpersonajes = document.getElementById("personajes");
    var diverror = document.getElementById("error");

    divpersonajes.innerHTML = "";
    diverror.innerHTML = "";

    personajes.forEach(personaje => {
        var detallepersonaje = document.createElement("div");
        detallepersonaje.className = "personaje";

        detallepersonaje.innerHTML = `
            <img src="${personaje.image}" alt="${personaje.name}">
            <h3>${personaje.name}</h3>
            <p>Estado: ${personaje.status}</p>
            <p>Especie: ${personaje.species}</p>
            <p>Tipo: ${personaje.type}</p>
            <p>Genero: ${personaje.gender}</p>
        `;

        divpersonajes.appendChild(detallepersonaje);
    });
}

function mostrarerror(error){
    var divpersonajes = document.getElementById("personajes");
    var diverror = document.getElementById("error");

    divpersonajes.innerHTML = "";
    errorDiv.innerHTML = `<p>No pudimos encontrar tu personaje. Por favor intenta de nuevo.</p>`; // Mostramos el mensaje de error
}


function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('genero').value = '';
}