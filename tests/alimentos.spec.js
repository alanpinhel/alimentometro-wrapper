import { expect } from 'chai';
import mock from 'mock-require';

import { getAlimentos, getAlimentoPorId, getAlimentosComNomeIniciadoPor } from '../src/alimentos';

describe('Alimentos', () => {
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
    {
      id: 3,
      nome: 'Coxão Mole',
      fatorCorrecao: 1.05,
      indiceConversao: 1,
    },
  ];

  beforeEach(() => {
    mock('../src/data/alimentos.json', alimentos);
  });

  afterEach(() => {
    mock.stop('../src/data/alimentos.json');
  });

  describe('smoke tests', () => {
    it('deve existir o método getAlimentos', () => {
      expect(getAlimentos).to.exist;
    });

    it('deve existir o método getAlimentoPorId', () => {
      expect(getAlimentoPorId).to.exist;
    });

    it('deve existir o método getAlimentosComNomeIniciadoPor', () => {
      expect(getAlimentosComNomeIniciadoPor).to.exist;
    });
  });

  describe('getAlimentos', () => {
    it('getAlimentos() deve retornar o conteúdo do arquivo alimentos.json', () => {
      mock('../src/data/alimentos.json', []);
      expect(getAlimentos()).to.deep.equal([]);
    });
  });

  describe('getAlimentoPorId', () => {
    it('getAlimentoPorId(1) deve retornar as informações do alimento com id 1', () => {
      const resultado = getAlimentoPorId(1);
      expect(resultado.id).to.be.equal(1);
      expect(resultado.nome).to.be.equal('Abacate');
      expect(resultado.fatorCorrecao).to.be.equal(1.46);
      expect(resultado.indiceConversao).to.be.equal(1);
    });

    it('getAlimentoPorId(2) deve retornar as informações do alimento com id 2', () => {
      const resultado = getAlimentoPorId(2);
      expect(resultado.id).to.be.equal(2);
      expect(resultado.nome).to.be.equal('Arroz Polido');
      expect(resultado.fatorCorrecao).to.be.equal(1);
      expect(resultado.indiceConversao).to.be.equal(2.33);
    });
  });

  describe('getAlimentosComNomeIniciadoPor', () => {
    it(`getAlimentosComNomeIniciadoPor('A') deve retornar as informações dos alimentos com nome iniciado por 'A'`, () => {
      const resultado = getAlimentosComNomeIniciadoPor('A');
      expect(resultado).to.deep.equal([
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
      ]);
    });

    it(`getAlimentosComNomeIniciadoPor('Arr') deve retornar as informações dos alimentos com nome iniciado por 'Arr'`, () => {
      const resultado = getAlimentosComNomeIniciadoPor('Arr');
      expect(resultado).to.deep.equal([
        {
          id: 2,
          nome: 'Arroz Polido',
          fatorCorrecao: 1,
          indiceConversao: 2.33,
        },
      ]);
    });

    it(`getAlimentosComNomeIniciadoPor('Coxão Mole') deve retornar as informações dos alimentos com nome iniciado com 'Coxão Mole'`, () => {
      const resultado = getAlimentosComNomeIniciadoPor('Coxão Mole');
      expect(resultado).to.deep.equal([
        {
          id: 3,
          nome: 'Coxão Mole',
          fatorCorrecao: 1.05,
          indiceConversao: 1,
        },
      ]);
    });
  });
});
