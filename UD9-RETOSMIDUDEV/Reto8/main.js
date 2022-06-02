/**
 * @author Javier Epifanio López
 */
 const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
 const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
 const pricesDoge = [18, 15, 12, 11, 9, 7]
 const pricesAda = [3, 3, 3, 3, 3]
 
/**
 *  función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
 * Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura
 * 
 * */
 function maxProfit(prices) {
      let maxProfit = 0;
      let minPrice = prices[0];
      for (let i = 1; i < prices.length; i++) {
          if (prices[i] < minPrice) {
              minPrice = prices[i];
          }
          if (prices[i] - minPrice > maxProfit) {
              maxProfit = prices[i] - minPrice;
          }
      }
      // Si no se puede hacer ningún beneficio, devolvemos -1
      if (maxProfit === 0) {
          return -1;
      }
      
      return maxProfit;
 }

 maxProfit(pricesAda)
 maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
 maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
 maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)
