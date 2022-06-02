/**
 * 
 */
 const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
 const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }

/**
 * Funcion que recibe que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
 * La funcion devuelve true si el producto está en el almacén y false en caso contrario.
 * */

function contains(store, product) {
    let result = false;
    for (let key in store) {
        if (typeof store[key] === 'object') {
        result = contains(store[key], product);
        } else if (store[key] === product) {
        result = true;
        }
    }
    return result;
}
 

              
  contains(almacen, 'camiseta') // true
  

    
  contains(otroAlmacen, 'gameboy') // false