// Obtener los datos almacenados en el localstorage

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON))