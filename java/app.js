console.log(document.title)

document.title = 'New Title'

console.log(document.getElementById('title'));

var tittle = document.getElementById('title');

console.log(tittle);

tittle.textContent = 'Lista de Tareas';

//querys

var elements = document.querySelectorAll(".task");
console.log(elements);

//insertar elementos
var newTask = document.createElement('li');
var list = document.querySelector('ul');
list.insertAdjacentElement('beforeend', newTask);


document.getElementById('form').addEventListener('submit', addtolist );

function addtolist(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    var nextTask = document.getElementById('nextTask').value; // Obtiene el valor del input text
    var ul = document.querySelector('ul'); // Selecciona la lista ul

    var li = document.createElement('li'); // Crea un nuevo elemento li
    li.className = 'task'; // Agrega la clase 'task' al elemento li
    li.textContent = nextTask; // Agrega el texto del input text al elemento li

    ul.appendChild(li); // Agrega el nuevo elemento li a la lista ul

    document.getElementById('nextTask').value = ''; // Limpia el input text
}

