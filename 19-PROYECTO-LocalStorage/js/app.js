// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-twets');
let tweets = [];

// Event listeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


// Funciones
function agregarTweet(e) {
    e.preventDefault();

    console.log('Agregando tweet');
}