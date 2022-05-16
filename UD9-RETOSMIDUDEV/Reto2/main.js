const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    return letter
    .split(' ')
    .filter(word => word[0] !== '_' && word)
    .reduce((previous, next) => {
      previous[next] = previous[next] + 1 || 1;
      return previous;
    }, {});
    
}

const regalos = listGifts(carta)
console.log(regalos)