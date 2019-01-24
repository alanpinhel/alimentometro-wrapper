import { expect } from 'chai';

import { converteParaPesagemHumana } from '../src/conversor';

describe('Conversor', () => {
  describe('smoke tests', () => {
    it('deve existir o método converteParaPesagemHumana', () => {
      expect(converteParaPesagemHumana).to.exist;
    });
  });

  describe('converteParaPesagemHumana', () => {
    it('converteParaPesagemHumana(0) deve retornar 0g', () => {
      expect(converteParaPesagemHumana(0)).to.equal('0g');
    });

    it('converteParaPesagemHumana(10) deve retornar 10g', () => {
      expect(converteParaPesagemHumana(10)).to.equal('10g');
    });

    it('converteParaPesagemHumana(10.412) deve retornar 11g', () => {
      expect(converteParaPesagemHumana(10.412)).to.equal('11g');
    });

    it('converteParaPesagemHumana(10.523) deve retornar 11g', () => {
      expect(converteParaPesagemHumana(10.523)).to.equal('11g');
    });

    it('converteParaPesagemHumana(1000) deve retornar 1kg', () => {
      expect(converteParaPesagemHumana(1000)).to.equal('1kg');
    });

    it('converteParaPesagemHumana(1500) deve retornar 1,5kg', () => {
      expect(converteParaPesagemHumana(1500)).to.equal('1,5kg');
    });

    it('converteParaPesagemHumana(4512.358) deve retornar 4,512kg', () => {
      expect(converteParaPesagemHumana(4512.358)).to.equal('4,512kg');
    });

    it('converteParaPesagemHumana(4512.533) deve retornar 4,513kg', () => {
      expect(converteParaPesagemHumana(4512.533)).to.equal('4,513kg');
    });
  });
});
