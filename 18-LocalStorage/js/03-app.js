// Eliminar un elemento del localstorage
localStorage.removeItem('nombre');

// Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Octubre');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));


// limpiar todo el localstorage
localStorage.clear()
