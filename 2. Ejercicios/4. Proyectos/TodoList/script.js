// Llamando contenido del HTML con DOM
let getContainer = document.querySelector('.container');
let getUl = document.querySelector('ul');
let getButton = document.querySelector('button');
let getInput = document.querySelector('input');
let getDivEmpty = document.querySelector('.empty');

// Eventos al hacer clic en el botón "+":
getButton.addEventListener("click", function newListElement(element) {
    // Remover texto "No new tasks"
    getDivEmpty.remove();

    // Creamos un "li", un "p" y un "button"
    // newP almacena el valor del input
    // newLi crea un elemento tipo li que tiene dentro newP y el botón que servirá para eliminar ese li más adelante
    let newLi = document.createElement('li');
    let newP = document.createElement('p');
    let newButton = document.createElement('button');
    element = getInput.value;
    newP.innerHTML = element;

    // Nueva class para poder trabjar mejor con el CSS
    newP.classList = "p-style"
    newButton.innerHTML = "X";
    newButton.classList = "button-remove";

    // Agregamos los nuevos elementos a la página
    newLi.appendChild(newP);
    getUl.appendChild(newLi);
    newLi.appendChild(newButton);

    // Eventos al hacer clic en el botón dentro del li
    newButton.addEventListener("click", () => {
        // Elimina el li y su contenido
        newLi.remove();
    })
});