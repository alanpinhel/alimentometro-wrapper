import { expect } from 'chai';
import mock from 'mock-require';

import Alimento from '../src/alimento';
import aw from '../src/index';

describe('AlimentometroWrapper', () => {
  it('getAlimentos() deve retornar uma lista de instâncias de Alimento', () => {
    mock('../data/alimentos.json', [{}, {}]);

    expect(aw.getAlimentos()).to.length(2);
    aw.getAlimentos().forEach(alimento => expect(alimento).to.be.an.instanceOf(Alimento));
  });
});
