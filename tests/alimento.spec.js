import { expect } from 'chai';
import mock from 'mock-require';

import { getPesoBrutoAlimentoPorId } from '../src/alimento';

describe('Alimento', () => {
  const alimentos = [
    {
      id: 1,
      nome: 'Abacate',
      fatorCorrecao: 1.46,
      indiceConversao: 1,
    },
    {
      id: 2,
      nome: 'Arroz Polido',
      fatorCorrecao: 1,
      indiceConversao: 2.33,
    },
  ];

  beforeEach(() => {
    mock('../src/data/alimentos.json', alimentos);
  });

  afterEach(() => {
    mock.stop('../src/data/alimentos.json');
  });

  describe('smoke tests', () => {
    it('deve existir o método getPesoBrutoAlimentoPorId', () => {
      expect(getPesoBrutoAlimentoPorId).to.exist;
    });
  });

  describe('getPesoBrutoAlimentoPorId', () => {
    it(`getPesoBrutoAlimentoPorId(1) deve retornar 1.460 para o peso bruto de uma grama do alimento de id 1`, () => {
      expect(getPesoBrutoAlimentoPorId(1)).to.be.equal(1.460);
    });

    it(`getPesoBrutoAlimentoPorId(2) deve retornar 0.429 para o peso bruto de uma grama do alimento de id 2`, () => {
      expect(getPesoBrutoAlimentoPorId(2)).to.be.equal(0.429);
    });
  });
});
