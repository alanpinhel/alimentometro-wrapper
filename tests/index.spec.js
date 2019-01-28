import { expect } from 'chai';
import mock from 'mock-require';
import IntlPolyfill from 'intl';
global.Intl = IntlPolyfill;

import Alimento from '../src/alimento';

describe('AlimentometroWrapper', () => {
  let aw;

  before(() => {
    mock('../data/alimentos.json', [{}, {}]);
    aw = require('../src/index').default;
  });

  it('getAlimentos() deve retornar lista de Alimentos', () => {
    expect(aw.getAlimentos()).to.length(2);
    aw.getAlimentos().forEach(alimento =>
      expect(alimento).to.be.an.instanceOf(Alimento));
  });

  it('formata() deve retornar 0g', () => {
    expect(aw.formata()).to.equal('0g');
  });

  it('formata(0) deve retornar 0g', () => {
    expect(aw.formata(0)).to.equal('0g');
  });

  it('formata(10) deve retornar 10g', () => {
    expect(aw.formata(10)).to.equal('10g');
  });

  it('formata(10.412) deve retornar 11g', () => {
    expect(aw.formata(10.412)).to.equal('11g');
  });

  it('formata(10.523) deve retornar 11g', () => {
    expect(aw.formata(10.523)).to.equal('11g');
  });

  it('formata(1000) deve retornar 1kg', () => {
    expect(aw.formata(1000)).to.equal('1kg');
  });

  it('formata(1500) deve retornar 1,5kg', () => {
    expect(aw.formata(1500)).to.equal('1,5kg');
  });

  it('formata(4512.358) deve retornar 4,512kg', () => {
    expect(aw.formata(4512.358)).to.equal('4,512kg');
  });

  it('formata(4512.533) deve retornar 4,513kg', () => {
    expect(aw.formata(4512.533)).to.equal('4,513kg');
  });
});
