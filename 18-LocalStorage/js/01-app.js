// Almacenar datos en el local storage

localStorage.setItem('nombre', 'leandro')

const producto = {
    nombre: 'placa de video',
    precio: 3500,
}

const productoString = JSON.stringify(producto); // convierte datos en string para que se almacenen en el localstorage, solo almacena string
localStorage.setItem('producto', productoString);

const meses = ['enero', 'febrero', 'marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString)