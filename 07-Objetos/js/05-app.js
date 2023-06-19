// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medida: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China',
            ciudad: ''
        }
    }
}


const { nombre, informacion, informacion: { fabricacion, fabricacion: pais } } = producto;


console.log(nombre)
console.log(informacion)
console.log(fabricacion)
console.log(pais)
