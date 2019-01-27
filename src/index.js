import Alimento from './alimento';

export default class AlimentometroWrapper {
  static getAlimentos() {
    /* eslint-disable global-require */
    return require('../data/alimentos.json').map(a =>
      new Alimento(a.id, a.nome, a.fatorCorrecao, a.indiceConversao));
  }
}
