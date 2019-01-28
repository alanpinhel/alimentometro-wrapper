import { expect } from 'chai';
import mock from 'mock-require';

import Alimento from '../src/alimento';

describe('AlimentometroWrapper', () => {
  it('getAlimentos() deve retornar uma lista de instâncias de Alimento', () => {
    mock('../data/alimentos.json', [{}, {}]);

    const aw = require('../src/index').default;
    expect(aw.getAlimentos()).to.length(2);
    aw.getAlimentos().forEach(alimento => expect(alimento).to.be.an.instanceOf(Alimento));
  });
});
