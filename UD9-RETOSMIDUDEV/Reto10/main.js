/**
 * @author Javier Epifanio López
 */

// array con las monedas disponibles
const coins = [1, 2, 5, 10, 20, 50];


/**
 * función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
 */
 function getCoins(change) {
     return Array.from([50, 20, 10, 5, 2, 1].forEach(coin => {
            let count = 0;
            while (change >= coin) {
                change -= coin;
                count++;
            }
            console.log(coin, count);
        }
        ));
    }



 console.log(getCoins(51))
    console.log(getCoins(3))
    console.log(getCoins(5))
    console.log(getCoins(16))
    console.log(getCoins(100))
