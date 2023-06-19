// Object literal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
}

// Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Table 10\"', 25700)
console.log(producto2)

const producto3 = new Producto('Monitor 30\"', 130500)
console.log(producto2)