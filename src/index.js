import Alimento from './alimento';

export default class AlimentometroWrapper {
  getAlimentos() {
    return require('../data/alimentos.json').map((a) =>
      new Alimento(a.id, a.nome, a.fatorCorrecao, a.indiceConversao));
  }
}
