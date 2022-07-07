const vqv = (nome, idade) => {
  if (nome === undefined || idade === undefined) {
return undefined;
  }
 return `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
};
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined

module.exports = vqv;
