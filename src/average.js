/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/ 

const average = (num) => {
 let soma = 0;
 if (num.length === 0) {
  return undefined;
}
 for (let i = 0; i < num.length; i += 1) {
   if (typeof num[i] !== 'number') {
     return undefined;
   }
  soma += num[i];
 }
   return Math.round(soma / num.length);
};
module.exports = average;
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// O Ronald me ajudou muito e juntos conseguimos descobrir pq não estava passando 
// o meu if tava condicionado de uma maneira errada, como length é = 0, o for não passaria do 0 nunca
// muito bom desenvolver e enxergar esse pensamento. 