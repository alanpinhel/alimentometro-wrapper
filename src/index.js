import Alimento from './alimento';
import alimentos from '../data/alimentos.json';

export default class AlimentometroWrapper {
  static getAlimentos() {
    return alimentos.map(a =>
      new Alimento(a.id, a.nome, a.fatorCorrecao, a.indiceConversao));
  }
}
