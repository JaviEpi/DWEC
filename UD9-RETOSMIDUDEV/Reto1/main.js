const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

// function contarOvejas(ovejas)
function contarOvejas(ovejas) {
    // devolver todas las ovejas que tengan el color rojo y que tenga en el nombre la letra 'a' y la letra 'n'
    let ovejasRojo = ovejas.filter(oveja => oveja.color === 'rojo')
    let ovejasRojoConN = ovejasRojo.filter(oveja => oveja.name.includes('a') && oveja.name.includes('N'))
    return ovejasRojoConN
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
