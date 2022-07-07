const calculator = (number1, number2) => {
  const soma = number1 + number2;
  const multiplicacao = number1 * number2;
  const divisao = Math.floor(number1 / number2);
  const subtracao = number1 - number2;

  const calculos = {
    sum: soma,
    mult: multiplicacao,
    div: divisao,
    sub: subtracao,
  };
  return calculos;
};

const arrayGenerator = (type, object) => {
 let array = [];
 if (type === 'keys') {
  array = Object.keys(object);
} else if (type === 'values') {
  array = Object.values(object);
} else if (type === 'entries') {
  array = Object.entries(object);
}
return array;
};

module.exports = { calculator, arrayGenerator };
