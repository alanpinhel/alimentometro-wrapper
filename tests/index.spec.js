import { expect } from 'chai';
import mock from 'mock-require';

import Alimento from '../src/alimento';
import AlimentometroWrapper from '../src/index';

describe('AlimentometroWrapper', () => {
  it('deve criar uma instância de AlimentometroWrapper', () => {
    expect(new AlimentometroWrapper()).to.be.an.instanceOf(AlimentometroWrapper);
  });

  it('getAlimentos() deve retornar uma lista de instâncias de Alimento', () => {
    mock('../data/alimentos.json', [{}, {}]);

    const alimentos = new AlimentometroWrapper().getAlimentos();

    expect(alimentos).to.length(2);
    alimentos.forEach(alimento => expect(alimento).to.be.an.instanceOf(Alimento));
  });
});
