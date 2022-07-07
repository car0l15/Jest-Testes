/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número
    expect(circle('aa1')).toBeUndefined();
    // Teste se circle retorna um objeto.
    expect(typeof circle(3)).toBe('object');
    // Teste se o objeto retornado tem 3 propriedades.
    expect(circle(5)).toHaveProperty('radius', 'area', 'circumference');
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
     // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
     expect(circle(2)).toMatchObject({circumference:12.56});
       // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
       expect(circle(3)).toMatchObject({area: 28.259999999999998});
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toMatchObject({radius:3, area: 28.259999999999998, circumference: 18.84});
  });
});
