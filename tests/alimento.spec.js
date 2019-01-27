import { expect } from 'chai';

import Alimento from '../src/alimento';

describe('Alimento', () => {
  it('deve criar uma instância de Alimento', () => {
    const alimento = new Alimento();
    expect(alimento).to.be.an.instanceOf(Alimento);
  });

  it('deve receber id como parâmetro', () => {
    const alimento = new Alimento(1);
    expect(alimento.id).to.be.equal(1);
  });

  it('deve receber nome como parâmetro', () => {
    const alimento = new Alimento(1, 'Abacaxi');
    expect(alimento.nome).to.be.equal('Abacaxi');
  });

  it('deve receber fator de correção como parâmetro', () => {
    const alimento = new Alimento(1, 'Abacaxi', 1.46);
    expect(alimento.fatorCorrecao).to.be.equal(1.46);
  });

  it('deve receber índice de conversão como parâmetro', () => {
    const alimento = new Alimento(1, 'Abacaxi', 1.46, 1);
    expect(alimento.indiceConversao).to.be.equal(1);
  });

  it('deve retornar peso bruto equivalente a um grama de peso processado', () => {
    const alimento = new Alimento(1, 'Abacaxi', 1.46, 1);
    expect(alimento.pesoBruto).to.be.equal(1.460);
  });
});
